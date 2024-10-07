var cnpj = "35080578874";

let usdInput = document.querySelector("#usd");
let InputProduto = document.querySelector("#Produto");




    function formatNum(valorInput, valorInner){
        var maiorDez = valorInner.length>4 ? 1 : 0;
        var arr = new Array();
                for(let i=0; i< valorInner.length; i++){
            if(valorInner[i] != ".") {
                arr.push(valorInner[i]);
                
            }   
        }
        arr.push(valorInput);
        arr.reverse();
        
        arr=arr.slice(0, 3 + maiorDez).reverse();
        arr.splice(1 + maiorDez, 0, ".");
        
        return arr.join("");
    }

    function formatProd(nProd){
        console.log(nProd);
        if (nProd.length==1){
            nProd=nProd.replace(/(\d{1})/, "L-0$1"); 
        
        } else if (nProd.length==7){
            console.log("if 2" + "$1")
            nProd=nProd.replace(/(\d{5})/, "$1-");
            console.log(nProd + "   " + nProd.length) 
       
        } else if (nProd.length==12){
            console.log("if 3 " + + nProd.length)
            nProd=nProd + "-";
            console.log(nProd + "   " + nProd.length) 
        };
        
        //console.log(nProd);
        return nProd;
    }

    var AllInput = document.getElementsByTagName('input')
    for (let el of AllInput){
        el.addEventListener('click', function() {
            el.selectionStart = 100;
            el.focus();
        });

        
        function keyPressed(evt){
            
            //evt = evt || window.event;
            var key = evt.keyCode || evt.which;
            var result=String.fromCharCode(key)
            if (key<48 || key>57){
                var thisEl = document.querySelectorAll('input')
                thisEl.forEach((element, i, array) => {
                    if(document.activeElement.id==element.id && key==13){
                        key=0;
                        //normalize(element.value)
                        var j = i+1>thisEl.length-1 ? 0 : i+=1; 
                        array[j].select();   
                        array[j].focus();
                                                       
                    }
                });
                
                result="";
                    
            } 
            return result; 
            
        }
            
        let resultDecimal;
        
        el.addEventListener('keypress', (evt) => {
            
            var str = keyPressed(evt);
            
            result = str ? resultDecimal=formatNum(str, el.value) : str
            return result;
            //resultDecimal=formatNum(str, el.value)
            
            //console.log ("valor " + str)

            /*
            //var valorInput=parseFloat(usdInput.value);
            //var keyPress=usdInput.value;
            console.log(event.keycode)
            /*str=str.replace(".", "");
            str=str.substring(1);
            str=str.charAt(0) + "." + str.substring(1);
            */
           
            //console.log(str);*/
            
           })

           el.addEventListener('keyup', () => {
                if(el.id=="Produto"){
                    var result = formatProd(el.value);
                    return el.value=result;
                } else {
                    var result = resultDecimal;
                    if(result != undefined){
                        el.value = resultDecimal;
                        /*var thisEl = document.querySelectorAll('input')
                        thisEl.forEach((element, i, array) => {
                            if(document.activeElement.id==element.id && flag==undefined){
                                flag=1;
                                console.log("OKKK");
                                array[i+1].focus();
                                array[i+1].select();
                                
                            }
                        });*/

                    } 
                }
            })
    }    
  