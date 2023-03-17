import { TTitle } from '@types-app/title.type'

function Title({ children, addClass }: TTitle) {
    return (
      <h1
        className={`
        text-center
        ${addClass}
        `}>
        {children}
      </h1>
    )
  }

  export default Title
