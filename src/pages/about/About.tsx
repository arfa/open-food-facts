import pkg from '../../../package.json';

export function About() {
  return (
    <>
      <div className=''>
        <div tabIndex={0} className='collapse'>
          <div className='collapse-title text-xl font-medium link'>Introduction</div>
          <div className='collapse-content'>
            <p>
              Dans le cadre de la recherche du candidat pour le poste de{' '}
              <a
                className='link'
                href='https://www.welcometothejungle.com/fr/companies/la-ruche-qui-dit-oui/jobs/developpeur-front-end-h-f_paris'
              >
                développeur front-end
              </a>{' '}
              à La Ruche Qui Dit Oui!, nous avons préparé un test technique.
            </p>
          </div>
        </div>
        <div tabIndex={1} className='collapse'>
          <div className='collapse-title text-xl font-medium link'>Objectifs</div>
          <div className='collapse-content'>
            <p>
              Le but est d'évaluer le candidat sur sa manière de gérer des appels à une API,{' '}
              <a className='link' href='https://wiki.openfoodfacts.org/Main_Page'>
                Open Food Facts
              </a>{' '}
              , ainsi que de traiter les données reçues en React.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8 flex flex-col md:flex-row content-around'>
        <code className='ml-auto mr-auto'>
          <h3 className='text-center underline'>Dependencies:</h3>
          <div className='card bordered'>
            <div className="card-body">
              <ul className='flex flex-col'>
                {(Object.keys(pkg.dependencies) as Array<keyof typeof pkg.dependencies>).map(
                  (depKey, index) => (
                    <li
                      className='p-2 border-b-2 last:border-b-0'
                      key={`dep-${index}`}
                    >{`${depKey}: ${pkg.dependencies[depKey]}`}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </code>
        <code className='ml-auto mr-auto mt-6 md:mt-0'>
          <h3 className='text-center underline'>Dev Dependencies:</h3>
          <div className='card bordered'>
            <div className="card-body">
              <ul className='flex flex-col'>
                {(Object.keys(pkg.devDependencies) as Array<keyof typeof pkg.devDependencies>).map(
                  (depKey, index) => (
                    <li
                      className='p-2 border-b-2 last:border-b-0'
                      key={`dep-${index}`}
                    >{`${depKey}: ${pkg.devDependencies[depKey]}`}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </code>
      </div>
    </>
  );
}
