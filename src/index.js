import React, {Component, PropTypes as t} from 'react'
import {render} from 'react-dom'
import Select from "react-select"
import "react-select/dist/react-select.css"
import {countries} from './data'

export default class ReactCountrySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag: props.value || null
        }
        this.logChange = this.logChange.bind(this);
        this.CountryRenderValue = this.CountryRenderValue.bind(this);
        this.CountryOptionRenderer = this.CountryOptionRenderer.bind(this);
    }

    logChange(val) {
        this.setState({tag: val});
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(val);
        }
    }

    CountryOptionRenderer(option) {
        return option.label
    }

    CountryRenderValue(option) {
        if (option.value === undefined) {
            return null;
        } else {
            return <span>{option.label}</span>
        }
    }

    render() {
        return (
            <div>
                <Select value={this.state.tag}
                options={countries}
                optionRenderer={this.CountryOptionRenderer}
                backspaceRemoves={true}
                onChange={this.logChange}
                valueRenderer={this.CountryRenderValue}
                multi={this.props.multi}/>
            </div>
        );
    }
}
