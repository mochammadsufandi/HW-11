const sum = (num1,num2) => {
    return num1+num2;
}

let length = 35
let number = (3/7)*length;
for(let i=0; i<number; i++) {
    let star = "";

    for(let j=0; j<number; j++) {
        if(i<=3 || i>=number-4) {
            star+="*"
        } else {
            if(j<=3 || j>=number-4) {
                star+="*"
            } else {
                star+=" "
            }
        }
    }
    console.log(star);
}
console.log()
console.log()
console.log()

for(let i=0; i<number; i++) {
    let star = "";

    for(let j=0; j<=length; j++) {
        if (j>=number && j<=number+(1/7)*length) {
            star+=" ";
        } 
        else if(j<number) {
            if(i<=2 || i>=number-3) {
                star+="*";
            } 
            else if(i>=Math.floor(number/2)-1 && i<=Math.floor(number/2)+1) {
                star+="*";
            }
            else {
                if(j<=3 || j>=number-4) {
                    star+="*"
                } else {
                    star+=" "
                }
            }
        }
        else if(j>number+(1/7)*length) {
            if(i<=2 || i>=number-3) {
                star+="*";
            }
            else if(i>=Math.floor(number/2)-1 && i<=Math.floor(number/2)+1) {
                star+="*";
            }
            else if(i>=Math.floor(number/2)-1 && i<=number) {
                if(j>number+(1/7)*length && j<=number+(1/7)*length+4) {
                    star+= "*";
                } else if(j>number+(1/7)*length+3 && j<length-3) {
                    star+=" ";
                } 
                else {
                    star+="*";
                }
                
            }
            else {
                if(j<=number+(1/7)*length+4) {
                    star+="*"
                } else {
                    star+=" "
                }
            }
        }
        
    }
    console.log(star);
}

const myFunc = (num) => {
    if(num <= 5) return 'kurang dari sama dengan 5';
    return 'lebih dari 5'
}

const myFunc1 = function() {

}
console.log(myFunc(6));

module.exports = sum;




