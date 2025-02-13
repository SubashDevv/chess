let Sqr=document.querySelectorAll(".sqr");
let blkPiece=document.querySelectorAll(".blk");
let whtPiece=document.querySelectorAll(".wht");
let side;
let n=0;//for turn index
let turn=["white","black"];//for one side's turn
let mode="none";//for moving piece
let pieceInfo;//for class
let prevPoz;//privious position
Sqr.forEach((sqr)=>{//looping
    sqr.addEventListener("click",()=>{     
        if( mode == "catch"){//setting the position of piece
            // if(prevPoz.firstElementChild.classList.contains("blk")){
            //     side="black";
            // }
            // else{
            //     side="white";
            // }
            // if(side==turn[n]){         
            const piece=document.createElement("i");
            piece.setAttribute("class",pieceInfo);
            if(sqr.firstElementChild!=null && sqr!=prevPoz)
            {
                sqr.firstElementChild.remove();
            }
            prevPoz.firstElementChild.remove();
            sqr.appendChild(piece);   
            (n=1)?n=0:n=1;//changing the value of n   
            console.log(n);        
        // }
            mode="none";
        }else if(sqr.firstElementChild!=null){
            //acessing info about pieces
       mode="catch";          
       prevPoz=sqr;
       pieceInfo=sqr.firstElementChild.getAttribute("class");
    }
    })
})

