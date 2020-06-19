export const types = `interface StepperBaseProps extends BasicProps {
  activeStep: number
  getSteps: (stepRef: React.RefObject<OnNextHandles>) => StepDetails[]
  gotoStep: (stepNumber: number) => void
  onFinish: () => void
  PaperProps?: Partial<PaperProps>
  StepperProps?: Partial<StepperProps>
  StepperButtonProps?: Partial<ButtonProps>
  StepProps?: Partial<StepProps>
  StepLabelProps?: Partial<StepLabelProps>
  label?: StepperBaseLabel
  classes?: StepperBaseClasses
  styles?: StepperBaseStyles
}

interface StepperBaseLabel {
  next: string
  back: string
  finish: string
}

interface BasicProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
}

interface StepperBaseClasses {
  content?: string
  actions?: string
  backButton?: string
  nextButton?: string
  finishButton?: string
}

interface StepperBaseStyles {
  content?: React.CSSProperties
  actions?: React.CSSProperties
  backButton?: React.CSSProperties
  nextButton?: React.CSSProperties
  finishButton?: React.CSSProperties
}
  `
