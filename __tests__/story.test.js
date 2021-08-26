import React from 'react'
import {render, screen} from '@testing-library/react'
import Story from "../pages/story"

it("renders without issue",()=>{
    render(<Story />)

})

it("renders renders to correct data",()=>{
    render(<Story />)
    
    expect(screen.getByText("StoryTitle")).toBeInTheDocument()
    expect(screen.getByText("Story URL")).toBeInTheDocument()
    expect(screen.getByText("Story timestamp")).toBeInTheDocument()
    expect(screen.getByText("Story Score")).toBeInTheDocument()
    expect(screen.getByText("Author ID")).toBeInTheDocument()
    expect(screen.getByText("Karma Score")).toBeInTheDocument()
})