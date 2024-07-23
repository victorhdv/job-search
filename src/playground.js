// for tests only

const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ['vue', 'js', 'ts'],
  lookingForWork: true,
  doubleSalary() {
    if (this.lookingForWork) {
      this.salary = this.salary * 2
      this.lookingForWork = false
    }
  }
}
developer.doubleSalary()
console.log(developer)
