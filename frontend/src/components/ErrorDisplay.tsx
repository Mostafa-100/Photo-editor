function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="text-red-500 text-xs">{message}</div>
  )
}

export default ErrorDisplay;