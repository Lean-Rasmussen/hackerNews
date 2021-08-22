import React from 'react'
import {render, fireEvent, waitFor, screen, getByRole} from '@testing-library/react'
import Stories from "../pages/stories"

it("renders without issue",()=>{
    render(<Stories />)
    expect(screen.getByRole("headline", {name: "Hacker News"})).toBeInTheDocument()
})

it("renders 10 stories",async()=>{
    render(<Stories />)
    let displayedStories = await screen.findAllByTestId("hackStory")
    expect(displayedStories.length).toBe(10)
})
it("renders 10 new stories", async()=>{
    render(<Stories />)
    const newStories = screen(getByRole("button", {name: "Get new Hacks"}))
    let displayedStories = await screen.findAllByTestId("hackStory")
    userEvent.click(newStories)
    let newDisplayStories = await screen.findAllByTestId("hackStory")
    expect(displayedStories).notToBe(newDisplayStories)
})