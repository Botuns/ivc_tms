// const AtfalModel = require('./models/_attendeeModel')
// const dbConfig = require('./configs/_dbConfig');
// const dbConnect = require('./configs/_dbConfig');

// const batchSize = 100; // Set the batch size as per your requirement

// async function deleteAllRecords() {
//   // await dbConfig()
//   await dbConnect()
//   try {
//     let deletedCount = 0;
//     let done = false;

//     while (!done) {
//       const result = await AtfalModel.deleteMany();
//       const { deletedCount: currentBatchDeletedCount } = result;
//       deletedCount += currentBatchDeletedCount;

//       if (currentBatchDeletedCount < batchSize) {
//         done = true;
//       }
//     }

//     console.log(`All ${deletedCount} records deleted successfully.`);
//   } catch (err) {
//     console.error('Error occurred:', err);
//   }
// }

// deleteAllRecords()
