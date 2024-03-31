var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var ten = document.getElementById("ten")
var eleven = document.getElementById("eleven")
var twelve = document.getElementById("twelve")
var therteen = document.getElementById("therteen")
var fourteen = document.getElementById("fourteen")
var fifthteen = document.getElementById("fifthteen")
var q = document.getElementById("q")
var a = document.getElementById("a")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a4 = document.getElementById("a4")
var emoji = document.getElementById("emoji")
var remove_item = document.getElementById("remove_item")
var ask_the_people = document.getElementById("ask_the_people")
var inner = document.getElementById("inner")
var imgq = document.getElementById("imgq")
var vid = document.getElementById("vid")
var addvid = document.getElementById("addvid")
vid.style.display = "none"
function getParameter(x){
    params= window.location.href.split("?")[1].split("&"); 
    for(i=0;i<params.length;i++){
        // ["id","example"]
     e = params[i].split("=");
     if(e[0] == x){
     return e[1];
    }
    }
}
var id = getParameter("id")

// l1
if(id === "906fbe61-9679-497f-B899-C8f25a47086d"){
    q.innerHTML = "what the first vehicle go to space"
    a.innerHTML = "Sputnik"
    a2.innerHTML = "Sputnik 1"
    one.style.background = "yellow"
    remove_item.addEventListener("click",()=>{
        alert("there are 2 choice")
    })
    ask_the_people.addEventListener("click",()=>{
        alert("the choice is 'B'")
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
    })
    a.addEventListener("click",()=>{
        a.style.background = "#f02"
        a.style.width = "fit-content"
        setTimeout(()=>{
            location.href = "/index.html"
        },3000)
    })
    a2.addEventListener("click",()=>{
        a2.style.background = "#0077b7"
        a2.style.width = "fit-content"
        setTimeout(()=>{
            location.href = "/Game.html?id=7581966a-5ceb-4735-9c40-10be039646ce"
        },3000)
    })
}
// l2
if(id === "7581966a-5ceb-4735-9c40-10be039646ce"){
    q.innerHTML = "what the best gun on valorant"
    a.innerHTML = "vandal"
    a2.innerHTML = "operator"
    a3.innerHTML = "phantom"
    a4.innerHTML = "none of them"
    two.style.background = "yellow"
    remove_item.addEventListener("click",()=>{
        a2.remove()
        a3.remove()
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/second level.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a.addEventListener("click",()=>{
    a.style.background = "#0077b7"
    setTimeout(()=>{
        location.href='/Game.html?id=De6b6c32-629a-4497-9e49-59ca7fb2f7d0'
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})    
}
// l3
if(id === "De6b6c32-629a-4497-9e49-59ca7fb2f7d0"){
    q.innerHTML = "how much one piece episodes"
    a.innerHTML = "1000+"
    a2.innerHTML = "1000"
    a3.innerHTML = "1000-"
    three.style.background = "yellow"
    remove_item.addEventListener("click",()=>{
        a3.remove()
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/third level.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a.addEventListener("click",()=>{
    a.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=Bc240b85-Aa39-4381-A57a-Cbc9d0e0f14a"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    a.style.display = "none"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    a.style.display = "none"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    a.style.display = "none"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})    
}
// l4 
if(id === "Bc240b85-Aa39-4381-A57a-Cbc9d0e0f14a"){
    q.innerHTML = "what the name of first episode in day33a day33a"
    a.innerHTML = "دخيل"
    a2.innerHTML ="أم الطنافس"
    a3.innerHTML = "أم الطنافس تحتا"
    four.style.background = "yellow"
    remove_item.addEventListener("click",()=>{
        a3.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/four level.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=3c7ce2dd-3329-4235-89be-893ce6624752"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l5
if(id === "3c7ce2dd-3329-4235-89be-893ce6624752"){
    q.innerHTML = "which formation of real madrid year is that"
    imgq.src = "/images/formation real madrid.jpg"
    a.innerHTML = "2017"
    a2.innerHTML = "2018"
    a3.innerHTML = "2019"
    a4.innerHTML = "2016"
    imgq.style.width = "200px"
    five.style.background = "yellow" 
    remove_item.addEventListener("click",()=>{
        a3.style.display = "none"
        a4.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/fivth.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=E46de433-2f6b-47ef-82bd-46b7e1b91892"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a4.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l6
if(id === "E46de433-2f6b-47ef-82bd-46b7e1b91892"){
    six.style.background = "yellow" 
    imgq.src = "/images/Lineups.jpg"
    q.innerHTML = "who is the both team"
    a.innerHTML = "barcelona - Real Sociedad"
    a2.innerHTML = "Real Sociedad - Real madrid"
    a3.innerHTML = "psg - Real madrid"
    a4.innerHTML = "machster united - barcelona"
    imgq.style.width = "200px"
    imgq.addEventListener("click",()=>{
        document.querySelector("body").innerHTML = 
        `
        <img src='/images/lineups.jpg' alt=''>
        <h1>4-2</h1>

        <br>
        <button id='close'>close</button>
        `
        document.getElementById("close").addEventListener("click",()=>{
            location.reload()
        })
    })
    remove_item.addEventListener("click",()=>{
        a2.style.display = "none"
        a4.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/six.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a.addEventListener("click",()=>{
    a.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=B87a9c1e-958d-4c5f-Adab-5c87fe43b11e"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l7
if(id === "B87a9c1e-958d-4c5f-Adab-5c87fe43b11e"){
    seven.style.background = "yellow" 
    q.innerHTML = 'which is best siri or google assistant or alexa'
    a.innerHTML = "siri"
    a2.innerHTML = "alexa"
    a3.innerHTML = "google assistant"
    a4.innerHTML = "all is good"
    remove_item.addEventListener("click",()=>{
        a.style.display = "none"
        a4.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/seven.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a2.addEventListener("click",()=>{
    a2.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=Ed99b54f-867b-4400-8983-Df935974f7d9"
    },3000)
})    
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l8
if(id === "Ed99b54f-867b-4400-8983-Df935974f7d9"){
    eight.style.background = "yellow" 
    q.innerHTML = "which is best chatgpt or google bard"
    a.innerHTML = "chatgbt"
    a2.innerHTML = "bard"
    a3.innerHTML = "both is good"
    remove_item.addEventListener("click",()=>{
        a.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/eight.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a2.addEventListener("click",()=>{
    a2.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=27ab62c3-Acca-4aad-A9d2-41cb7930c61f"
    },3000)
})    
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})

}
// l9
if(id === "27ab62c3-Acca-4aad-A9d2-41cb7930c61f"){
    nine.style.background = "yellow" 
    q.innerHTML = "how much the most expensive car"
    a.innerHTML = "26.2M"
    a2.innerHTML = "28.2M"
    a3.innerHTML = "20.2M"
    a4.innerHTML = "30.2M"
    remove_item.addEventListener("click",()=>{
        a2.style.display = "none"
        a4.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/nine.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a.addEventListener("click",()=>{
    a.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=A3598757-0699-48ef-9e80-F497f3441827"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l10
if(id === "A3598757-0699-48ef-9e80-F497f3441827"){
    ten.style.background = "yellow" 
    q.innerHTML = "how much the most expensive car name"
    a.innerHTML = "Bugatti la Voiture Noire"
    a2.innerHTML = "Pagani Zonda HP Barchetta"
    a3.innerHTML = "Bugatti Divo"
    a4.innerHTML = "Rolls-Royce Boat Tail"
    remove_item.addEventListener("click",()=>{
        a.style.display = "none"
        a3.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/ten.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a4.addEventListener("click",()=>{
    a4.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=1caf8a0f-8ad4-43b0-B12c-4efc9bc3c7a6"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l11
if(id === "1caf8a0f-8ad4-43b0-B12c-4efc9bc3c7a6"){
    eleven.style.background = "yellow" 
    q.innerHTML = "How many companies does Elon Musk own?"
    a.innerHTML = "10 companies"
    a2.innerHTML = "6 companies"
    a3.innerHTML = "12 companies"
    a4.innerHTML = "4 companies"
    remove_item.addEventListener("click",()=>{
        a.style.display = "none"
        a3.style.display = "none"
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = `<img width='1200px' src='/images/eleven.png' alt=''>
        `
        setTimeout(()=>{
            location.reload()
        },6000)

    })
a2.addEventListener("click",()=>{
    a2.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=031b59cb-B318-4879-8dfb-F0bba28464b1"
    },3000)
})    
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l12
if(id === "031b59cb-B318-4879-8dfb-F0bba28464b1"){
    twelve.style.background = "yellow" 
    q.innerHTML = "what the mean of : جٌنْط in day33a day33a"
    a.innerHTML = "بنشر"
    a2.innerHTML = " ضرب"
    remove_item.addEventListener("click",()=>{
        alert("the car جٌنْط in the street")
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        alert("the car جٌنْط in the street")
    })
a.addEventListener("click",()=>{
    a.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=4cbb0b52-1b6f-4c9c-93a8-F934f9d3d113"
    },3000)
})    
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l13
if(id === "4cbb0b52-1b6f-4c9c-93a8-F934f9d3d113"){
    therteen.style.background = "yellow" 
    vid.style.display = "block"
    vid.src = "/video/level13.mp4"
    vid.style.width = "150px"
    q.innerHTML = "higher than 9M"
    a.innerHTML = "higher"
    a2.innerHTML = "lower"
    remove_item.addEventListener("click",()=>{
        alert("there are only 2 chice")
    })
    ask_the_people.addEventListener("click",()=>{
        alert("srry cant")
    })
a2.addEventListener("click",()=>{
    a2.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=9546ece0-F468-4671-8547-66e177653cb2"
    },3000)
})    
a.addEventListener("click",()=>{
    a.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})
}
// l14
if(id === "9546ece0-F468-4671-8547-66e177653cb2"){
    fourteen.style.background = "yellow" 
    q.innerHTML = "Who is No 1 football player in the history?"
    a.innerHTML = "lionel messi"
    a2.innerHTML = "zidan"
    remove_item.addEventListener("click",()=>{
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
        alert("he is the Goat")
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        alert("he is the Goat")
    })
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})    
a.addEventListener("click",()=>{
    a.style.background = "lightblue"
    setTimeout(()=>{
        location.href = "/Game.html?id=C588e1b9-6597-429b-8edb-9201633f9e87"
    },3000)
})
}
// l15
if(id === "C588e1b9-6597-429b-8edb-9201633f9e87"){
    fifthteen.style.background = "yellow" 
    q.innerHTML = `Who is the richest footballer in the world?`
    a.innerHTML = "Faiq Bolkiah"
    a2.innerHTML = "messi"
    a3.innerHTML = "ronaldo"
    a4.innerHTML = "Dave Whelan"
    remove_item.addEventListener("click",()=>{
        localStorage.setItem("removeitem2","none")
        var remove = localStorage.getItem("removeitem2")
        remove_item.style.display = remove
        a2.style.display = "none"
        a3.style.display = "none"
    })
    ask_the_people.addEventListener("click",()=>{
        localStorage.setItem("removeitem","none")
        var emove = localStorage.getItem("removeitem")
        ask_the_people.style.display = emove
        inner.innerHTML = 
        `
        <img src='/images/final.png'>
        `
    })
a2.addEventListener("click",()=>{
    a2.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})  
a4.addEventListener("click",()=>{
    a4.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})  
a3.addEventListener("click",()=>{
    a3.style.background = "red"
    setTimeout(()=>{
        location.href = "/index.html"
    },3000)
})    
a.addEventListener("click",()=>{
    a.style.background = "lightblue"
    setTimeout(()=>{
        inner.innerHTML = 
        `
        <h1>winner boy suiiiiiiiiiiii</h1>
        <img src="/video/congr.gif" alt="">
        <button id='loc'>next level</button>
        `
        document.getElementById("loc").onclick = ()=>{
            location.href = "/index.html"
        }
    },3000)
})
}
window.onload = ()=>{
    var emove = localStorage.getItem("removeitem")
    ask_the_people.style.display = emove
    var remove = localStorage.getItem("removeitem2")
    remove_item.style.display = remove
}