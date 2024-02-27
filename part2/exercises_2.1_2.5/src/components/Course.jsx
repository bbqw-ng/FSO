const Course = ({course}) => { 
  // sum is the accumulator
  // part is the value to add 
  // 0 is the start value
  // const total = course.parts.reduce((sum, part) => sum + part.exercises , 0)
  const totals = (course) => (
    course.parts.reduce((sum, part) => sum + part.exercises, 0)
  )

  const subCourse = (course) => (
    course.parts.map(part => 
      <p key={part.id}>{part.name} {part.exercises}</p>
    )
  )

  const mainCourse = () => {
    return (
      <div>
        {course.map((course) => { 
          return (
            <div key={course.id}>
              <h1>{course.name}</h1>
              {subCourse(course)}
              <h3>total of {totals(course)} exercises</h3>
            </div>
          )
        })}
      </div>
    )
  }
  

  return (
    <div>
      {mainCourse()}
    </div>
  )
}

export default Course
