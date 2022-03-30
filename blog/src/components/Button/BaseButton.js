import { Button } from "rebass"
import styled from "styled-Components"
import React from "react"
import PropTypes from "prop-types"

const Reset = styled(Button)'
    background: none;
    box-shadow: none;
    font-weight:normal;
    border-radius: 0;
    cursor: pointer;
'

const BaseButton = ({children, ...rest}) =>
    <Reset {...rest}>{children}</Reset>

BaseButton.PropTypes = {
    children: PropTypes.node.isRequired
}