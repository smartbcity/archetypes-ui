// import { Button } from '@material-ui/core'
// import React from 'react'

// interface JSXElementWithOptionnalProps {
//     <T extends keyof OptionnalProps>(
//         props: {
//             withSpan: T
//         } & AdditionalProps<T>
//     ): JSX.Element;
// }

// interface TestBasicProps {
//     name: string
// }

// interface TestProps<T extends keyof OptionnalProps | any> {
//     withSpan?: T
// }

// interface OptionnalProps {
//     spanProps: SpanProps
// }

// interface SpanProps {
//     onClick: () => void
// }

// type AdditionalProps<T = ""> = (T extends keyof OptionnalProps ? OptionnalProps[T] : never)

// export const Test: JSXElementWithOptionnalProps = (props: (TestProps<any>)) => {
//     const {} = props
//     return (
//         <Button >
//             {/* {onClick && <span onClick={onClick}>
//                 salut
//             </span>} */}
//             <Test />
//         </Button>
//     )
// }
