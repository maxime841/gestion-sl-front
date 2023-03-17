import React from 'react'
import '../App.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit'
import InstagramIcon from '@atoms/icons/instagram-icon'
import FlickerIcon from '@atoms/icons/flicker-icon'
import DiscordIcon from '@atoms/icons/discord-icon'
import LinkText from '@atoms/links/link-text'
import Neyney from '../../assets/picture/neyney_picture.jpg'
import Second_life_logo from '../../assets/picture/second_life_logo.png'

function AboutUsPage() {
  return (
    <>
      <h1 className="text-center mb-4 text-4xl">Qui sommes nous?</h1>
    <section className="flex grid sm: grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 ml-16 mr-16 lg:grid-cols-4 gap-x-16 gap-y-16">
        {/* profil neyney */}
        <div className="mr-2 w-96 rounded-xl" style={{ backgroundColor: '#01796F', color: 'white' }}>
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src={Neyney}
                        className="rounded-full mx-auto" fluid style={{ width: '120px', height: '120px' }} />
                    </div>
                    <MDBTypography tag="h4">Nɛyɳɛy Sativa Rнia</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      Owner WAM club
                    </MDBCardText>
                    <div className="flex justify-center mb-4 pb-2">
                      <a className="mx-3" href="https://www.instagram.com/neyjma_galli.sl/" target="_blank"><InstagramIcon /></a>
                      <a className="mx-3" href="https://www.flickr.com/photos/194852201@N08" target="_blank"><FlickerIcon /></a>
                      <a className="mx-3" href="https://discord.gg/ejXbhHbC" target="_blank"><DiscordIcon /></a>
                      <a className="mx-3" href="http://maps.secondlife.com/secondlife/Saint%20Emilion/98/52/2402" target="_blank"><img className="w-5" src={Second_life_logo} alt="logo second life" /></a>
                    </div>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <MDBCardText className="mb-1 h5">632</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Instagram</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">917</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Flicker</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">27</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Discord</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        {/* profil neyney */}
        <div className="mr-2 w-96 rounded-xl" style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle mx-auto" fluid style={{ width: '100px' }} />
                    </div>
                    <MDBTypography tag="h4">Nɛyɳɛy Sɑtiѵɑ Rнια</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      Owner WAM club
                    </MDBCardText>
                    <div className="flex justify-center mb-4 pb-2">
                      <LinkText link=''>
                        <InstagramIcon />
                      </LinkText>
                      <LinkText link='https://www.flickr.com/photos/194852201@N08/'>
                        <FlickerIcon />
                      </LinkText>
                      <LinkText link=''>
                        <DiscordIcon />
                      </LinkText>
                    </div>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        {/* profil neyney */}
        <div className="mr-2 w-96 rounded-xl" style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle mx-auto" fluid style={{ width: '100px' }} />
                    </div>
                    <MDBTypography tag="h4">Nɛyɳɛy Sɑtiѵɑ Rнια</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      Owner WAM club
                    </MDBCardText>
                    <div className="flex justify-center mb-4 pb-2">
                      <LinkText link=''>
                        <InstagramIcon />
                      </LinkText>
                      <LinkText link='https://www.flickr.com/photos/194852201@N08/'>
                        <FlickerIcon />
                      </LinkText>
                      <LinkText link=''>
                        <DiscordIcon />
                      </LinkText>
                    </div>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Instagram</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Flicker</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Discord</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        {/* profil neyney */}
        <div className="mr-2 w-96 rounded-xl" style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle mx-auto" fluid style={{ width: '100px' }} />
                    </div>
                    <MDBTypography tag="h4">Nɛyɳɛy Sɑtiѵɑ Rнια</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      Owner WAM club
                    </MDBCardText>
                    <div className="flex justify-center mb-4 pb-2">
                      <LinkText link=''>
                        <InstagramIcon />
                      </LinkText>
                      <LinkText link='https://www.flickr.com/photos/194852201@N08/'>
                        <FlickerIcon />
                      </LinkText>
                      <LinkText link=''>
                        <DiscordIcon />
                      </LinkText>
                    </div>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Instagram</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Flicker</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Discord</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        {/* profil neyney */}
        <div className="mr-2 w-96 rounded-xl" style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle mx-auto" fluid style={{ width: '100px' }} />
                    </div>
                    <MDBTypography tag="h4">Nɛyɳɛy Sɑtiѵɑ Rнια</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      Owner WAM club
                    </MDBCardText>
                    <div className="flex justify-center mb-4 pb-2">
                      <LinkText link=''>
                        <InstagramIcon />
                      </LinkText>
                      <LinkText link='https://www.flickr.com/photos/194852201@N08/'>
                        <FlickerIcon />
                      </LinkText>
                      <LinkText link=''>
                        <DiscordIcon />
                      </LinkText>
                    </div>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Instagram</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Flicker</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Discord</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        {/* profil neyney */}
        <div className="mr-2 w-96 rounded-xl" style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle mx-auto" fluid style={{ width: '100px' }} />
                    </div>
                    <MDBTypography tag="h4">Nɛyɳɛy Sɑtiѵɑ Rнια</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      Owner WAM club
                    </MDBCardText>
                    <div className="flex justify-center mb-4 pb-2">
                      <LinkText link=''>
                        <InstagramIcon />
                      </LinkText>
                      <LinkText link='https://www.flickr.com/photos/194852201@N08/'>
                        <FlickerIcon />
                      </LinkText>
                      <LinkText link=''>
                        <DiscordIcon />
                      </LinkText>
                    </div>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Instagram</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Flicker</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers Discord</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section></>
  )
}
export default AboutUsPage
