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

    window.$ = window.jQuery = jQuery;
})()