var contacts = [
  {key: 1, name: "Malevolentninja", email: "malevolentninja@gmail.com", description: "coding newbie"},
  {key: 2, name: "Ben Hur", email: "ben@example.com", description: "fierce warrior"}
  {key: 3, name: "Bobba Fett", email: "Bobba Fett", description: "Bounty Hunter"}
  {key 4, name: "Batman"},


]

var ContactItem = 
  React.createClass ((
    propTypes: {
      name: React.PropTypes.string.isRequired, 
      email: React.PropTypes.string.isRequired, 
      description: React.PropTypes.string,
    
      }, 
      
      render: function () {
      
      return (
      React.createElement('li', {},
        React.createElement('h2', {}, this.props.name),
        React.createElement('a', {href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div', {}, this.props.description)
      )
    )
    },
  
  })

  var contactItemElements = contacts
  .filter(function(contact) { return contact.email })
  .map(function(contact) { return React.createElement(ContactItem, contact) })

var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {}, contactItemElements)
  )
