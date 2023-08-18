const cors =require('cors');
const { LeetCode } = require("leetcode-query");
const leetcode = new LeetCode();

const leetExtractDetails = async(req,res) => {
try{
const userInfo = await req.body;
let data = await leetcode.user("divy0403");
    // await leetcode.user("divy0403").then((user) => console.log(user));
    console.log(data);
    console.log(data.matchedUser.submitStats.acSubmissionNum);
    console.log(data.matchedUser.submitStats.totalSubmissionNum);
    // console.log(data.allQuestionsCount);
    // console.log(data.matchedUser.submitStats.totalSubmissionNum);
    // const hardDifficulty = data.matchedUser.submitStats.acSubmissionNum.find(item => item.difficulty === 'Hard');
    // console.log(hardDifficulty);

}catch(error){
console.log(error);
res.status(404).json({message:'Match Not Found !'});
}
}
leetExtractDetails();