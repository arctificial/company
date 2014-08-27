 var keywords = ["Kami adalah", "我们", "we zijn", "Siamo", "nous", "Kita", "biz", "私たちは", "nós","01110111 01100101","우리","Kamoe","We Are"];
        var count = 1;
        setInterval(function(){
            $("span.keyword").fadeOut(400, function(){
                $(this).html(keywords[count]);
                count++;
                if(count == keywords.length)
                    count = 0;
                $(this).fadeIn(400);
            });
        }, 3250);