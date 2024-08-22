'use client'

const AdditionalInfo = ({ roles, courses, salary }: any) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Additional Information</h2>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Types of Roles</h3>
        <ul className="list-disc ml-6 mt-2">
          {roles.map((role: any) => (
            <li key={role.id} className="text-lg">{role}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Courses</h3>
        <ul className="list-disc ml-6 mt-2">
          {courses.map((course: any) => (
            <li key={course.id} className="text-lg">
              <a href={course.url} className="text-blue-500 underline">{course.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Salary Information</h3>
        <p className="text-lg">{salary}</p>
      </div>
    </div>
  );
}

export default AdditionalInfo;