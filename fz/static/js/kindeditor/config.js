KindEditor.ready(function(K) {
        K.create('textarea[name=body]',{
            width:800,
            height:400,
            uploadJson: '/admin/upload/kindeditor'
        });

});  