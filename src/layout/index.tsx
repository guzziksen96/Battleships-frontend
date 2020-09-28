import React from 'react'
import { withRouter, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../store/type'
import { Dimmer, Loader } from 'semantic-ui-react'

const Layout: React.FC<RouteComponentProps> = ({ children }) => {
    const isLoading = useSelector((state: AppState) => state.isLoading)
    console.log('isLoading', isLoading)

    return (
        <div>
            
            {children}
            {isLoading && (<div className="loader"> Loading... <Loader active inline /> </div>)}

        </div>

    )
}
export default withRouter(Layout);