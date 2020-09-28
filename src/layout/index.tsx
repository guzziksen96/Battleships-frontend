import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../store/type'
import { Loader } from 'semantic-ui-react'

const Layout: React.FC<RouteComponentProps> = ({ children }) => {
    const isLoading = useSelector((state: AppState) => state.isLoading)
    
    return (
        <div>
            {children}
            {isLoading && (<div className="loader"> Loading... <Loader active inline /> </div>)}
        </div>
    )
}
export default withRouter(Layout);