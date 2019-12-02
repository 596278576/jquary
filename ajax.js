function ajax(obj){
  // obj = {
  //   url,type,data,callback
  // }
  // 为了使用起来更加方便，可以给参数一些默认值
  obj = obj || {};
  obj.url = obj.url || '';
  obj.type = obj.type || 'get';
  obj.data = obj.data || {};

  // 0 传进来的data是一个 对象，我们需要的是 键=值&键=值的格式 - 手动的转换一下
  // 遍历对象，然后把对象里面的每个建和值转换为我们需要的格式
  let arr = [];
  for(let key in obj.data){
    arr.push(`${key}=${obj.data[key]}`);
  }
  obj.data = arr.join('&');
  // 1 创建一个异步对象
  let xhr = new XMLHttpRequest();
  // 2 设置请求方式和请求地址
  // 如果是get请求，需要把数据带在url的后面 url?键=值
  if(obj.type.toLowerCase() === 'get'){
    obj.url += '?' + obj.data

  }
  xhr.open(obj.type,obj.url);
  // 3 发送请求
  // 如果请求是post，要把数据放在send里面，同时需要设定 请求头
  if(obj.type.toLowerCase() === 'post'){
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    // 然后发送请求
    xhr.send(obj.data); // 数据要的是键=值的形式，如果给了一个对象，不会自动的转换 键=值&键=值&键=值 - url编码格式
  }else{
    xhr.send();
  }
  // 4 监听状态
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      let response = xhr.responseText;
      // 如果返回的结果是一个json格式的字符串，就帮我们先转换为对象
      // console.log(xhr.getResponseHeader('Content-Type'));
      if(xhr.getResponseHeader('Content-Type').indexOf('json') !== -1){
        // 证明 content-type 这个响应头里面包含 json ，证明返回的就是json格式字符串
        response = JSON.parse(xhr.responseText);
      }
      // 如果请求成功，就执行对应的逻辑
      obj.callback && obj.callback(response);
    }
  }
}