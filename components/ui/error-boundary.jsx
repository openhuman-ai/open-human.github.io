"use client"

import { Callout } from "@/nextra"
import React, { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: "" }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error.message)
    console.log("errorInfo", errorInfo)
    this.setState({ errorMessage: error.message })
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
            <div className="inset-0 h-screen flex items-center justify-center  mx-auto">
              <Callout type="error" className="min-w-[500px]">
                <h2 className="text-xl font-bold">Unknow Error</h2>
                <div className="container py-2">
                  <p className="mb-4">
                    Please visit{" "}
                    <a className="text-blue-500 underline" href="https://openhuman.github.io">
                      HomePage
                    </a>{" "}
                    to get access again
                  </p>
                  <p className="text-sm">{this.state.errorMessage}</p>
                </div>
              </Callout>
            </div>
          </div>
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
