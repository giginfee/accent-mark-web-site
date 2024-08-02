const fs = require('fs');
const Meyda = require('meyda');
const DTW = require('dynamic-time-warping');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const wav = require('wav');
const path = require('path');



module.exports.getAnswerId= async (fileNameTest, wordId, window=8192)=>{
    const directory = path.resolve(`audioFiles/${wordId}`);
    let mffcTest=await getMfcc(fileNameTest,window)

    try {
        const files = fs.readdirSync(directory);
        let answerFile=files[0]
        let cost=Infinity
        for(let file of files){
            let mffcDB=await getMfcc(`audioFiles/${wordId}/${file}`,window)
            let dtw = new DTW(mffcDB, mffcTest, euclideanDistance);
            let costCurr = dtw.getDistance();
            if(costCurr<=cost) {
                cost = costCurr
                answerFile=file
            }
        }
        // console.log("answer: ", answerFile[0])
        return answerFile[0]
    } catch (error) {
        console.error(`Помилка при отриманні файлів з директорії: ${error}`);
        return null;
    }

    return null ;

}

function euclideanDistance(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('The dimensions of the points must be equal.');
    }

    let sumOfSquares = 0;
    for (let i = 0; i < arr1.length; i++) {
        sumOfSquares += Math.pow((arr1[i] - arr2[i]), 2);
    }

    return Math.sqrt(sumOfSquares);
}






module.exports.convertToWav=(inputFile)=> {
    return new Promise((resolve, reject) => {
            ffmpeg.setFfmpegPath(ffmpegPath);
            ffmpeg(inputFile + '.webm')
                .format('wav')
                .outputOptions('-acodec pcm_s16le')
                .on('end', function () {
                    resolve('Conversion finished');
                })
                .on('error', function (err) {
                    reject('Error during conversion:', err);
                })
                .save(inputFile + '.wav');
        }
    )
}

async function getMfcc(inputFile, windowSize=8192){
    const reader = new wav.Reader();
    const fileStream = fs.createReadStream(inputFile);
    fileStream.pipe(reader);

    const format = await new Promise((resolve, reject) => {
        reader.on('format', (format) => {
            resolve(format);
        });
        reader.on('error', (err) => {
            reject(err);
        });
    });


    let buffer = await readWavData(reader);
    // windowSize = 8192;
    let mfccFeatures=[]
    for (let i = 0; i < buffer.length; i += windowSize) {
        let slice = buffer.slice(i, i + windowSize);
        slice=Buffer.from(arrayToPowerOfTwoLen(slice))
        const mfcc = Meyda.extract('mfcc', slice);
        mfccFeatures.push(Array.from(mfcc));
    }

    return mfccFeatures
}

function readWavData(reader) {
    return new Promise((resolve, reject) => {
        let data = [];
        reader.on('data', (chunk) => {
            data.push(chunk);
        });
        reader.on('end', () => {
            resolve(Buffer.concat(data));
        });
        reader.on('error', (err) => {
            reject(err);
        });
    });
}

function arrayToPowerOfTwoLen(array) {
    const targetLength = Math.pow(2, Math.ceil(Math.log2(array.length)));
    const newArray = new Array(targetLength - array.length).fill(0);
    return Array.from(array).concat(newArray);
}
