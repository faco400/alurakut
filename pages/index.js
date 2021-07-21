import MainGrid from '../src/components/MainGrid/MainGrid'
import Box from '../src/components/Box/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return(
    <Box>
      <img src = {`http://github.com/${propriedades.profile}.png`}/>
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
    'saracampss'
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
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper> 
            <h2 className = "smalltitle" >
              Pessoas Favoritas ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((ItemAtual) => {
                return(
                  <li>
                    <a href = {`http://github.com/${ItemAtual}`} key={ItemAtual}>
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
