var Links = {
  SetColor: function (color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body= {
  SetColor: function (color) {
    document.querySelector('body').style.color = color;
  }, SetColorBackGround: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body')
  if (self.value === 'night') {
    Body.SetColorBackGround('black');
    Body.SetColor('white');
    self.value = 'day';
    Links.SetColor('white');
  } else {
    Body.SetColorBackGround('white');
    Body.SetColor('black');
    self.value = 'night'
    Links.SetColor('blue');
  }
}
