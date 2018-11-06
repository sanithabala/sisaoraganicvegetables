var cart = [];

function data(){
    var veg= [
        {"id":"5","Name":"Brinjal","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/brinjal.jpg"},
        {"id":"6","Name":"Corn","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/corn.jpg"},
        {"id":"7","Name":"Cucumber","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/cucumber.jpg"},
        {"id":"8","Name":"Pumkin","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/pumkin.jpg"},
        {"id":"9","Name":"WhiteOnion","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/whiteonion.jpg"},
        {"id":"10","Name":"Coriander","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/qureyleaf.jpg"},
        {"id":"11","Name":"Avacado","Price":"50","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/sandwitchcake.png"},
        {"id":"1","Name":"Beans","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/beans.jpg"},
        {"id":"2","Name":"Carrot","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/carrot.jpg"},
        {"id":"3","Name":"Beetroot","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/beatroot.jpg"},
        {"id":"4","Name":"Capsicum","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/capacicam.jpg"},
         
       {"id":"9","Name":"WhiteOnion","Price":"40","Gram":"250g","Kilogram":"500g","Kilogram":"1kg","imgurl":"img/whiteonion.jpg"},
       
    ];
    var veg1=document.getElementById("veg_row");

    var vegdata="";

    for(var i=0;i<veg.length;i++)
        {
                     
// vegdata +='<div class="col-lg-3"><div class="text-center"><img src="'+veg[i].imgurl+'" alt="carrot" class="img-responsive"/><h3>'+veg[i].Name+'</h3><button class="bttn">-</button><span><input type="name" text="name" value="1" style="width: 20px;text-align: center"></span><span><button class="bttn">+</button></span><br><div class="btn cart_btn price">'+ veg[i].Price+'</div><button onClick="addTocart(&quot '+veg[i].id+'&quot,&quot '+veg[i].Name +'&quot,&quot '+veg[i].Price+'&quot)" type="button" class="btn btn-primary cart_btn"><span class="glyphicon"></span>Add to Cart</button></div></div>'  
              vegdata += '<div class="col-lg-3 col"><div class="pic"><div class="text-center"><img src="'+veg[i].imgurl+'" class="img-responsive pics"><br><a>'+veg[i].Name+'</a><br><a href="#" class="price">'+ veg[i].Price +'</a><div class="dropdown"><button class="btn btn-primay dropdown-toggle" type="button" data-toggle="dropdown">'+veg[i].Gram+'<span class="caret"></span></button><ul class="dropdown-menu" style="padding: 10px 15px 12px;"><li><a href="#">250gm</a></li><li><a href="#">1kg</a></li><li><a href="#">500gm</a></li></ul></div><button type="button" onClick="addTocart(&quot '+veg[i].id+'&quot,&quot '+veg[i].Name +'&quot,&quot '+veg[i].Price+'&quot)" class="btn btn-primary btn-block cart_btn"><span class="glyphicon"></span>Add to Cart</button></div></div></div>'
       
}   
 veg1.innerHTML=vegdata;
    checkCart();
    
}



function addTocart(id,name,price){
    var arr = [];
    
    var b = {id : id,name:name,price:price};
    
    var old = localStorage.getItem("cart");
    
    if(old == null){
        arr.push(b);
    }else{
        
        var p = JSON.parse(old);
    
        p.map((i) => {
            //console.log(i.id)
            if(i.id == id){
                console.log("already exist!!")
            }else{
                arr.push(i);
            }
        })
        arr.push(b);
    }
    //console.log(arr);
    localStorage.setItem("cart",JSON.stringify(arr));
    setTimeout(checkCart(),1000);
}

function cartPage(){
    var showcart = document.getElementById("showcart");
    var cartCount = document.getElementById("cartCount");
    var cart = localStorage.getItem("cart");
    var p_cart = JSON.parse(cart);
    var c_count = cartItemCount();
    
    if(cart == null){
        showcart.innerHTML = "No item selected!!";
        cartCount.innerHTML = "0";
    }else{
        var str = '';
        for(var i =0;i<p_cart.length;i++){
            var img = p_cart[i].name.toLowerCase().trim();
            str += '<div class="row" style="padding: 10px 0px;box-shadow: 1px 2px 9px #333;border-radius: 4px;"><div class="col-lg-4"><img src="img/'+ img+'.jpg" style="height: 160px;margin: auto;" class="img-responsive"/><span style="display: inline-flex;margin-left: 50px;margin-top: 20px;"><button>-</button><input type="number" size="2" style="width: 50px;" readonly id="quantity_ip" class="form-control"><button>+</button></span></div><div class="col-lg-8"><h3><b>'+ p_cart[i].name +'</b></h3><h3>1 Kg</h3><h3>50 r</h3><span><a>Save for Later</a>&nbsp;&nbsp;&nbsp;<a onClick="remove('+ i +')">Remove</a></span></div></div>';
        }
        showcart.innerHTML = str;
        cartCount.innerHTML = c_count;
    }
    
}

function remove(id){
    console.log(id);
    //get all item from localstorage
    var items = localStorage.getItem("cart");
    var p_cart = JSON.parse(items);
    
    p_cart.splice(id, 1);
    localStorage.setItem("cart",JSON.stringify(p_cart));
    
    console.log("deleted")
    window.location = "cart.html";
}

function cartItemCount()
{
    var items=localStorage.getItem("cart");
    var parsing=JSON.parse(items);
    var l = parsing.length;
    return l;
}

function checkCart(){
    var c = document.getElementById("cart_c");
    var cartcount = cartItemCount();
    if(cartcount == 0){
        c.innerHTML = "0";
    }else{
        c.innerHTML = cartcount;
    }
}





























