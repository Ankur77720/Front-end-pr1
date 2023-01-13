function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger)
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  })
  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  })
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
}

function boxesanimation() {
  var links = [
    'https://assets.website-files.com/6205ecdcec584c56193d6121/625049f25321603541f849ab_Brand_Work_noWindow_540x1080-transcode.mp4',
    'https://assets.website-files.com/6205ecdcec584c56193d6121/62bd5211d2734d33b4f1f3e8_Product_Work_noWindow_540x1080_v2-transcode.mp4',
    'https://assets.website-files.com/6205ecdcec584c56193d6121/62504a9bfb995aa187002397_Motion_Work_noWindow_540x1080-transcode.mp4',
  ]
  const videobox1 = document.createElement('video')
  videobox1.src = links[0]
  videobox1.autoplay = true
  videobox1.muted = true
  videobox1.loop = true
  var imga = document.querySelector('#imga')
  var ape = 0
  document
    .querySelector('#boxes')
    .addEventListener('mouseover', function (dets) {
      const box = document.getElementById('box4')
      var hoverid = dets.target.id
      if (hoverid == 'box1') {
        videobox1.src = links[0]
        ape = 1
      }
      if (hoverid == 'box2') {
        videobox1.src = links[1]
        ape = 1
      }
      if (hoverid == 'box3') {
        videobox1.src = links[2]
        ape = 1
      }
      if (ape) {
        box.appendChild(videobox1)
        videobox1.play()
        imga.style.display = 'none'
        setTimeout(() => {
          videobox1.style.width = '100%'
        }, 0)
      }
    })
  document
    .querySelector('#box1')
    .addEventListener('mouseleave', function (dets) {
      const box = document.getElementById('box4')
      videobox1.animate({ width: '0vw' }, 0)
      box.removeChild(videobox1)
      videobox1.style.width = '0%'
      imga.style.display = 'initial'
      ape = 0
    })
  document
    .querySelector('#box2')
    .addEventListener('mouseleave', function (dets) {
      const box = document.getElementById('box4')
      videobox1.animate({ width: '0vw' }, 0)
      box.removeChild(videobox1)
      videobox1.style.width = '0%'
      imga.style.display = 'initial'
      ape = 0
    })
  document
    .querySelector('#box3')
    .addEventListener('mouseleave', function (dets) {
      const box = document.getElementById('box4')
      videobox1.animate({ width: '0vw' }, 0)
      box.removeChild(videobox1)
      videobox1.style.width = '0%'
      imga.style.display = 'initial'
      ape = 0
    })
  document
    .querySelector('#imga')
    .addEventListener('mousemove', function (event) {
      var dot = document.querySelector('#dot')
      var rect = document.querySelector('#box4 #imga').getBoundingClientRect()
      dot.style.top = `${event.clientY - rect.top}px`
      dot.style.left = `${event.clientX - rect.left}px`
      dot.style.backgroundColor = 'yellow'
    })
  document
    .querySelector('#box4 #imga')
    .addEventListener('mouseleave', function () {
      var dot = document.querySelector('#dot')
      dot.style.top = '50%'
      dot.style.left = '50%'
      dot.style.backgroundColor = 'white'
    })
}

document
  .querySelector('#video')
  .addEventListener('mousemove', function (event) {
    var rect = document.querySelector('#video').getBoundingClientRect()
    document.querySelector('#play').style.top = `${event.clientY - rect.top}px`
    document.querySelector('#play').style.left = `${event.clientX}px`
  })

function partner() {
  var partnersimg = [
    'https://assets.website-files.com/620970e0fc117e313fe36ebd/6230748853904a0042b3044f_logo_BlockFi.svg',
    'https://assets.website-files.com/620970e0fc117e313fe36ebd/6230788a6672557bb9fd96c8_logo_Coursera.svg',
    'https://assets.website-files.com/620970e0fc117e313fe36ebd/624db668954b1077a51d3dab_qed-investors.svg',
    'https://assets.website-files.com/620970e0fc117e313fe36ebd/624ed1a4baf7a9339f3a7866_software_ag.svg',
    'https://assets.website-files.com/620970e0fc117e313fe36ebd/62307498fbef4b94d427e01f_logo_Walmart.svg',
  ]
  var partnerstext = [
    'Helping a fintech leader redefine banking. We designed BlockFi’s web and mobile app, which lets users manage their crypto wallet, trade crypto, and borrow money against their holding',
    'Understanding what learners want. Using insights from user interviews, we helped the edtech startup Coursera evolve the UX of their MasterTrack® Certificate product to drive enrollment.',
    'A trusted design partner for the premier VC in fintech. With strategy-led, systematic design, we help QED’s portfolio companies bring new brands and products to market.',
    'Bridging the gap for the connected enterprise. Using abstract 3D models, we created unique animation to show how Software AG helps businesses reach their digitally transformed future.',
    'Data-driven product design for one of the world’s largest retailers. With usability testing, rapid prototyping, and cutting-edge UX tactics, we reshaped Walmart’s e-commerce experience.',
  ]
  flutter = ''
  for (var i = 0; i < 5; i++) {
    flutter += `<div class="partset">
    <img src="${partnersimg[i]}" alt="">
    <div class="text">
        <p>${partnerstext[i]}</p>
    </div>
    </div>`
  }
  document.querySelector('#partners').innerHTML = flutter

  document
    .querySelector('#partners')
    .addEventListener('mousemove', function (event) {
      document.querySelector('#drag').transform =
        'translate(-50%, -50%) scale(1)'
      var rect = document.querySelector('#partners ').getBoundingClientRect()
      document.querySelector('#drag').style.top = `${
        event.clientY - rect.top
      }px`
      document.querySelector('#drag').style.left = `${event.pageX}px`
    })
}

function imagediv() {
  document
    .querySelector('#img1')
    .addEventListener('mousemove', function (event) {
      var rect = document.querySelector('#img1').getBoundingClientRect()
      document.querySelector('#img1 .view').style.top = `${
        event.clientY - rect.top
      }px`
      document.querySelector('#img1 .view').style.left = `${
        event.pageX - rect.left
      }px`
      document.querySelector(
        '#img1 .view',
      ).style.transform = `translate(-50%,-50%) scale(1)`
    })
  document
    .querySelector('#img2')
    .addEventListener('mousemove', function (event) {
      var rect = document.querySelector('#img2').getBoundingClientRect()
      document.querySelector('#img2 .view').style.top = `${
        event.clientY - rect.top
      }px`
      document.querySelector('#img2 .view').style.left = `${
        event.pageX - rect.left
      }px`
      document.querySelector(
        '#img2 .view',
      ).style.transform = `translate(-50%,-50%) scale(1)`
    })

  document
    .querySelector('#img3')
    .addEventListener('mousemove', function (event) {
      var rect = document.querySelector('#img3').getBoundingClientRect()
      document.querySelector('#img3 .view').style.top = `${
        event.clientY - rect.top
      }px`
      document.querySelector('#img3 .view').style.left = `${
        event.pageX - rect.left
      }px`
      document.querySelector(
        '#img3 .view',
      ).style.transform = `translate(-50%,-50%) scale(1)`
    })
  document.querySelector('#img1').addEventListener('mouseleave', function () {
    document.querySelector('#img1 .view').style.top = `50%`
    document.querySelector('#img1 .view').style.left = `50%`
    document.querySelector(
      '#img1 .view',
    ).style.transform = `translate(-50%,-50%) scale(0)`
  })
  document.querySelector('#img2').addEventListener('mouseleave', function () {
    document.querySelector('#img2 .view').style.top = `50%`
    document.querySelector('#img2 .view').style.left = `50%`
    document.querySelector(
      '#img2 .view',
    ).style.transform = `translate(-50%,-50%) scale(0)`
  })
  document.querySelector('#img3').addEventListener('mouseleave', function () {
    document.querySelector('#img3 .view').style.top = `50%`
    document.querySelector('#img3 .view').style.left = `50%`
    document.querySelector(
      '#img3 .view',
    ).style.transform = `translate(-50%,-50%) scale(0)`
  })
}
locoTrigger()
partner()
boxesanimation()
imagediv()

$('.row').textillate({
  in: {
    effect: 'fadeInUp',
  },
})
gsap.to('#page1', {
  opacity: 0,
  scrollTrigger: {
    Trigger: '#video',
    scroller: '#main',
    start: 'center 45%',
    end: 'center 8%',
    scrub: true,
  },
})

gsap.from('#boxes', {
  width: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: '#boxes',
    scroller: '#main',
  },
})
document.querySelectorAll('h1').forEach((h1) => {
  gsap.from(h1, {
    duration: 1,
    transform: 'translate(0%,100%)',
    scrollTrigger: {
      trigger: h1,
      scroller: '#main',
      start: 'top 97%',
      end: 'top 70%',
    },
  })
})
