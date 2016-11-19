 var rootElement = 
                React.createElement('div', {}, 
                 React.createELement('h1', {}, "Contacts"), 
                 React.createElement('ul', {}, 
                   React.createElement('li', {} , 
                     React.createElement('h2', {}, "Malevolent Ninja"), 
                        React.createElement('a', {href: 'mailto:malevolentninja@gmail.com'}, 
                                    'malevolentninja@gmail.com')
                                       ), 
                       React.createElement('li', {},
        React.createElement('h2', {}, "Ben Hur"),
        React.createElement('a', {href: 'mailto:Ben@example.com'}, 'Ben@example.com')
      )
    )
  )
   ReactDOM.render(rootElement, document.getElementById('react-app'))
