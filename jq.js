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


    window.$ = window.jQuery = jQuery;
})()