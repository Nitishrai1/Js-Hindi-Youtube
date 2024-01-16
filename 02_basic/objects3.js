// de struturing
const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}
// systex to fech data
// course.courseInstructor

const {courseInstructor}=course
console.log(courseInstructor);
//  to rename
const {courseInstructor:instructor}=course
console.log(instructor);


// API : it play a very importent role in verfication between user and the website
// JSON
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":999
// }