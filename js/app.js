document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
})

let category_options = {
    series: [44, 55, 41, 17],
    labels: ['X', 'Y', 'z', 'W'],
    chart: {
        type: 'donut',
    },
    colors: undefined
    ,
  theme: {
    monochrome: {
      enabled: true,
      color: '#FFA500',
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
}
}

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options)
category_chart.render()

let skill_options = {
    series: [{
        name: "Improvement",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: "Practice ",
        data: [20, 30, 10, 20, 16, 40, 20, 51, 10]
    }],
    colors: ['#FFA500','orangered'],
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
        position: 'top'
    }
}

let skill_chart = new ApexCharts(document.querySelector("#skill-chart"), skill_options)
skill_chart.render()

var goal_options = {
    series: [42, 47, 52, 58, 65],
    chart: {
    width: 380,
    type: 'polarArea'
  },
  labels: ['A', 'B', 'C', 'D', 'E'],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#FFA500',
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#goal-chart"), goal_options);
  chart.render();

let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}