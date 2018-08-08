import { h, Component } from 'preact'
import './style.scss'

interface SpeedDownButtonProps {
  onClick?: (e: any) => void
}

export class SpeedDownButton extends Component<SpeedDownButtonProps> {
  render() {
    return (
      <div class="hlv__button button__speeddown" onClick={this.props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="currentcolor"
        >
          <path d="M0 0 L0 64 L32 32 L32 64 L64 32 L32 0 L32 32 Z" />
        </svg>
      </div>
    )
  }
}
