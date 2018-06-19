import React from 'react';
import { List,  Icon} from 'semantic-ui-react';
import Posts from './Posts';
class App extends React.Component{
    render(){
        return(
            <div>
                <List link>
    <List.Item active href="/">A Big OL' Blog</List.Item>
    
    <List.Item as='a' href="/createpost">CREATE POST</List.Item>
    
  </List>   
  <Icon name='pencil alternate' /> 
  <Posts/>
     
                </div>
        )
    }
}

export default App;