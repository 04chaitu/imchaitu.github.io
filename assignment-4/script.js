var names=new Array();
names[0]="chaitu";
names[1]="Junnu luu";
names[2]="ravi";
names[3]="teja";
names[4]="venkat";
names[5]="sai";
names[6]="bhanu";
names[7]="junnu";
names[8]="sri";
names[9]="boomer";


for (var i = 0;i < names.length;i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("hello "+ names[i])
    }
}