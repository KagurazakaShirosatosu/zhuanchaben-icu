function countTime() {  
    //获取当前时间  
    var date = new Date();  
    var now = date.getTime();  
    //设置截止时间  
    var str="2021/4/10 09:00:00";
    var endDate = new Date(str); 
    var end = endDate.getTime();  
    
    //时间差  
    var leftTime = end-now; 
    //定义变量 d,h,m,s保存倒计时的时间  
    var d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);                     
    }
    //将0-9的数字前面加上0，例1变为01
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    function checkTime(i){
        if (i<10) {
            i = "0"+i;
        }
        return i;
    }
    //将倒计时赋值到div中  
    document.getElementById("_d").innerHTML = d+"日";  
    document.getElementById("_h").innerHTML = h+"时";  
    document.getElementById("_m").innerHTML = m+"分";  
    document.getElementById("_s").innerHTML = s+"秒";  
    //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(countTime,1000);  

}  