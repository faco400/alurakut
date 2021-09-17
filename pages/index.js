import MainGrid from '../src/components/MainGrid/MainGrid'
import Box from '../src/components/Box/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return(
    <Box>
      <img src = {`http://github.com/${propriedades.profile}.png`}/>
      <hr/>

      <div>
        <a className="boxLink" href={`http://github.com/${propriedades.profile}`}>
          @{propriedades.profile}
        </a>
      </div>

      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'faco400';
  const pessoasFavoritas = [
    'senaarth',
    'RuanMoura',
    'victordsantoss',
    'thiagomesUNB',
    'paulogoncalveslima',
    'pedro-cella',
    'gabrielapivetta',
    'jschneiderm98',
    'saracampss',
    'eddie-gomes'
  ]

  return (
    <>
      <AlurakutMenu/>

      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar profile = {githubUser}/>
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box className = "title">
            Bem-Vindo(a)
            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">Crie sua comunidade</h2>
            <form onSubmit={function handleCreateCommunity(){
              alert("oi");
            }}>
              <input
                placeholder="Insira o nome da sua comunidade"
                type="text" 
                aria-label="Insira o nome da sua comunidade"
                name="title"
              />
              <input
                placeholder="Insira URL para foto de capa"
                aria-label="Insira URL para foto de capa"
                name="image"
              />
              <button>Enviar</button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper> 
            <h2 className = "smallTitle" >
              Pessoas Favoritas ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((ItemAtual) => {
                return(
                  <li key={ItemAtual}>
                    <a href = {`http://github.com/${ItemAtual}`}>
                      <img src ={`http://github.com/${ItemAtual}.png`}/>
                      <span>{ItemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
