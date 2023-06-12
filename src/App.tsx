import DomainList from './components/DomainList'

function App() {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <h1 className='d-flex mb-3 me-md-auto text-dark text-decoration-none'>Domain List Search Example</h1>
      </header>
      <DomainList />
    </div>
  )
}

export default App
