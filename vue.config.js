// 解析指令参数
// npm指令需要读取 process.env.npm_config_argv
// s
// console.log("process.argv值", yarn_argv)
// console.log(yarn_argv[4]);

const config = {};
// 获取自定义参数
let idx = 2;     //npm   2
let Ridx = 2;     //npm   2
// const cooked = argv1.original;  //  == yarn_argv   yarn_argv.length == 3 
// const length = argv1.original.length;
// const cooked = yarn_argv;  

// const cooked = argv1.cooked;
// const length = argv1.cooked.length;
// console.log('cooked123',cooked);
// console.log("length",length);
// while ((idx += 2) <= length) {
//     console.log("idx",idx);
//     config[cooked[idx - 2]] = cooked[idx - 1];
// }
// while ((Ridx += 3) <= RVlength) {
//     console.log("idx",idx);
//     config[RV[Ridx - 2]] = RV[Ridx - 1];
// }


// console.log("cooked[idx - 2]",cooked[idx - 2]);
// console.log("config[cooked[idx - 2]]",config[cooked[idx - 2]]);
// console.log("cooked[idx - 1]",cooked[idx - 1]);
// console.log("cooked",cooked);
// console.log(cooked[idx - 2]);
// console.log('config[cooked[idx - 2]]',config[cooked[idx - 2]]);
// console.log(idx);
// console.log("config",config);
// console.log("cooked",cooked);
// console.log(length);
// process.env.VUE_APP_PAGE_ID = config['--aaaa']
// // if( process.env.VUE_APP_PAGE_ID === 'undefined' ){
// //     process.env.VUE_APP_PAGE_ID = yarn_argv[4]
// // }
// console.log(" 输出 " + process.env.VUE_APP_PAGE_ID)


// VUE 平台配置内容
module.exports = {
    productionSourceMap: false
}