var quotes=[
    {
        name:"Dr. APJ Abdul Kalam",
        status:"The Missile Man of India",
        imageUri:"img/quote_people/apj_abdul_kalam.jpg",
        quote:[
            "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
       "If you want to shine like a sun, First burn like the sun.",
       "Your best teacher is your last mistake.",
    //    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    //    "Failure will never overtake me if my determination to succeed is strong enough.",
       "A dream is not that which you see while sleeping, it is something that does not let you sleep.",
       "The best brains of the nation may be found on the last benches of the classroom.",
       "All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds",
       "Don’t read success stories, you will only get a message. Read failure stories, you will get some ideas to get success."
        ]
    },
    {
        name:"Ray Bradbury",
        status:"American author",
        imageUri:"img/quote_people/ray_bradbury.jpg",
        quote:[
        "Love what you do and do what you love."
        ]
    },
    {
        name:"Evan Spiegel",
        status:"Co-founder - Snap Inc",
        imageUri:"img/quote_people/evan_spiegel.jpg",
        quote:[
        "It's not about working harder; it's about working the system."
        ]
    },
    {
        name:"Bill Gates",
        status:"Co-founder - Microsoft Corporation",
        imageUri:"img/quote_people/bill_gates.jpg",
        quote:[
        "I failed in some subjects in exam, but my friend passed in all. Now he is an engineer in Microsoft and I am the owner of It."
        ]
    },
    {
        name:"Steve Jobs",
        status:"Co-founder - Apple Inc",
        imageUri:"img/quote_people/steve_jobs.jpg",
        quote:[
        "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become."
        ]
    },
    {
        name:"Jack Ma",
        status:"Co-founder - Alibaba Group",
        imageUri:"img/quote_people/jack_ma.jpg",
        quote:[
        "Your attitude is more important than your capabilities. Similarly, your decision is more important than your capabilities!"
        ]
    }

    

    

    
];


function insertQuotesToView(){
    console.log("adding view STARST");
    addQuotesToView(shuffle(getQuotesAsList(quotes)));
}
function getQuotesAsList(quotes){
    var list=[];
    for(var item of quotes){
       
        // console.log("adding view list LENGTH "+list.length);
        for(var quoteItem of item.quote){
            var obj={};
            obj.name=item.name;
            obj.status=item.status;
            obj.imageUri=item.imageUri;
            obj.quote=quoteItem;
            
            list.push(obj);
        }
        
    }
    
    return list;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function addQuotesToView(quotes){
    console.log("adding view ",quotes.length);
    var container = document.getElementById('slideshow-container');
    var dotsContainer = document.getElementById('slideshow-dots-container');
    
    for(var indiQuote of quotes){
        console.log("adding view QUOTE "+indiQuote.quote);
        let content=getIndiQuoteView(indiQuote.name,indiQuote.status,indiQuote.quote,indiQuote.imageUri);
        let dotContent=getIndiQuoteDotsView(dotsContainer.childElementCount+1);
        container.innerHTML += content;
        dotsContainer.innerHTML+=dotContent;
    }
}


function getIndiQuoteView(name,status,quote,imageUri){
return '<div class="mySlides fade">'+
  '<div>'+
    '<div class="owl-item clearfix" style="max-width: 690px;    margin: auto auto;">'+
        '<div class="testimonial">'+
        '<div class="content">'+
            '<i class="fa fa-quote-left"></i>'+
            '<p class="description">'+
            quote+
            '</p>'+
            '<div style="text-align: right;"><i class="fa fa-quote-right" ></i></div>'+
        '</div>'+
        '<div class="testimonial-pic">'+
            '<img src="'+imageUri+
           '" alt="">'+
        '</div>'+
        '<div class="testimonial-review">'+
            '<h2 class="testimonial-title">'+name+
            '</h2>'+
            '<span>'+status+
            '</span>'+
        '</div>'+
    '</div></div>'+
  '</div>'+

'</div>'
}


function getIndiQuoteDotsView(number){
return '<span class="dot" onclick="currentSlide('+number+')"></span>';
}


insertQuotesToView();