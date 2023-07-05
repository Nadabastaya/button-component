import styled from 'styled-components'

export const Button = styled.button`

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 6px;
    border: 0;
    
    flex-direction: ${(props) => props.startIcon ? 'row' : props.endIcon ? 'row-reverse' : 'row' };

    box-shadow: ${(props) => props.color === 'primary' ? '0px 2px 3px 0px #2962FF33'
                           : props.color === 'secondary' ? '0px 2px 3px 0px #455A6433'
                           : props.color === 'danger' ? '0px 2px 3px 0px #D32F2F33'
                           : props.disableShadow ? 'none' 
                           : '0px 2px 3px 0px #33333333'
                        };

    width: ${(props) => props.size === 'sm' ? '73px'
                      : props.size === 'md' ? '81px'
                      : props.size === 'lg' ? '93px' 
                      : '81px'};
    height:  ${(props) => props.size === 'sm' ? '32px'
                        : props.size === 'md' ? '36px'
                        : props.size === 'lg' ? '42px' 
                        : '36px'};
    
    background-color: ${(props) => props.color === 'primary'   ? '#2962FF'
                                 : props.color === 'secondary' ? '#455A64'
                                 : props.color === 'danger'    ? '#D32F2F'
                                 : props.variant  === 'outline' || props.variant === 'text' ? '#FFF' 
                                 : '#E0E0E0'
                        };
    outline:          ${(props) => props.variant === 'outline' ? 'solid 1px #3D5AFE' : 'none'};

    color: ${(props) => props.color === 'primary' || 
                        props.color === 'secondary' || 
                        props.color === 'danger' ? '#FFF' :
                        props.variant  === 'outline' || 
                        props.variant === 'text' ? '#3D5AFE' 
                        : '#3F3F3F'
};
    
    &:hover, &:focus, &.active {
        background-color: ${(props) => props.color === 'primary'   ? '#0039CB'
                                        : props.color === 'secondary' ? '#1C313A'
                                        : props.color === 'danger'    ? '#9A0007'
                                        : props.variant  === 'outline' || props.variant === 'text' ? '#2962FF1A' 
                                        : '#AEAEAE'
        };
    }
    &:disabled  {
        background-color: ${(props) => props.variant === 'text' ? '#FFF' : '#E0E0E0'};
        color: #9E9E9E;
    }
`
