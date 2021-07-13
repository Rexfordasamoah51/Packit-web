/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '#', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Sign in', // name that appear in Sidebar
  },
  {
    path: '/app/dashboard',
    icon: 'FormsIcon',
    name: 'Home',
  },
  {
    path: '/app/PackChatUI',
    icon: 'ChartsIcon',
    name: "Bot",
  },

  {
    path: '/app/Profile',
    icon: 'TablesIcon',
    name: 'Profile',
  },
 
]

export default routes
