;(function(){
    // 选择器封装
    function jQuery(selector){
        return new Init(selector);
    };
    function Init(selector){
        let elements=document.querySelectorAll(selector);
        //遍历
        for(let i=0;i<elements.length;i++){
            this[i]=elements[i];
        }
        // 补全数据长度
        this.length=elements.length;
    };

    //each的封装
    Init.prototype.each=function(hanshu){
        for(let i=0;i<=this.length;i++){
            hanshu(i,this[i]);
        }
        return this;
    }

    // 注册事件的封装
    Init.prototype.on=function(key,hanshu){
        this.each((i,e)=>{
            e.addEventListener(key,hanshu);
        })
        return this;
    };

    //css样式修改的封装
    Init.prototype.css=function(key,zhi){
        if(zhi==undefined){
            let cs=getComputedStyle(this[0]);
            return cs[key];
        }else{
            this.each((i,e)=>{
                e.style[key]=zhi;
            })
            return this;
        }
    }

    window.$ = window.jQuery = jQuery;
})()