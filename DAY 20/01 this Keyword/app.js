let student = {
    name : "Rohit",
    age : 21,
    cms : 83,
    eng : 87,
    che : 89,
    phy : 94,
    math : 94,
    getAvg(){
        let avg = (this.che+this.phy+this.math+this.cms+this.eng)/5;
        console.log(avg);
    }
};

console.log(student.getAvg());