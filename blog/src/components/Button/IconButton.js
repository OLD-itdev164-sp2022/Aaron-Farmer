import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import BaseButton from "./BaseButton"

const StyledButton = styled(BaseButton)'

'

const IconButton = styled(({children, ...rest})=>{
    <StyledButton as {clone.type} {...rest} className={rest.className} />

})
    
IconButton.defaultProps = {
    size:24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired
}
