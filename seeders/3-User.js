'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = 
    [
      {
        "username" : null,
        "password" : "$2b$08$MmYLaP3cYEen0C6gN55JvueN2J9JuG0AxG\/7gofQcbS2wK0ANdFJ.",
        "email" : "sleep@gmail.com",
        "name" : "Iwant2sleep",
        "role" : "reader",
        "dob" : "2005-04-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$FUmgoP3immQjt2.I4SlWVO.3DT0VJ4f5roLbkrUCOiGhmELIKeKcO",
        "email" : "chanlanthan@gmail.com",
        "name" : "chanlanthan",
        "role" : "editor",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$5BNTlmUOhIcJh3zXdy8bruKBxLvl3gnAx1ffz0p6l43Ia.7vFWMbO",
        "email" : "hihi@gmail.com",
        "name" : "hihi",
        "role" : "reader",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$Th63O86PKKy\/mAoSsqe8J.zhMMAkgrs50e2VGRVCHKjRUjTri4iXG",
        "email" : "phone@gmail.com",
        "name" : "phone",
        "role" : "reader",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : null,
        "email" : "pagethpage@gmail.com",
        "name" : "Page Page",
        "role" : "writer",
        "dob" : null,
        "avatar" : "https:\/\/lh3.googleusercontent.com\/a\/AAcHTtdyRrd2dZRuc5v4nFHmtDHA2SMioGxF_mKGHjkCpUwb=s96-c"
      },
      {
        "username" : "nestick3",
        "password" : "$2b$08$.AmOgMAp.boygMlaAk.PM.dHhjjDuzHjeLK8nXADMNByynESROpwC",
        "email" : "nestick3@omniture.com",
        "name" : "Novelia Estick",
        "role" : "reader",
        "dob" : "1979-08-13T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : "kgierek4",
        "password" : "$2b$08$9Qw.pLfwHzqKeq2jsDuOfempTIXFGF\/y0NDErY4xVCCWtGd4Qjt2W",
        "email" : "kgierek4@youtube.com",
        "name" : "Kacey Gierek",
        "role" : "reader",
        "dob" : "2013-11-19T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "rmoyser0",
        "password" : "$2b$08$tdqP7J2g8WJYR7T6Zwxtoe2\/hSH6rIT2x3O3yDQoSY2bA2Lvm79Bm",
        "email" : "rmoyser0@squarespace.com",
        "name" : "Raynard Moyser",
        "role" : "editor",
        "dob" : "2012-04-08T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$a3mHYKiz5uYTa1uvQSi6xO5YNBo7\/.b5yFId.giNWtyDoKbaG.uNq",
        "email" : "admind123@gmail.com",
        "name" : "admin",
        "role" : "reader",
        "dob" : "2002-02-02T00:00:00.000Z",
        "avatar" : null
      },
      {
        "username" : "dlabarre1",
        "password" : "$2b$08$oKmFMJOrZ7ZIQ0MIGJbwH.PMOF36SfqmI8l08XqGiCBQnFXSVvJlK",
        "email" : "dlabarre1@squidoo.com",
        "name" : "Debor Labarre",
        "role" : "editor",
        "dob" : "1967-09-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "warbor2",
        "password" : "$2b$08$z4nB9ih6bAYVSsOq6LL6e.qoTg\/MSMbYxuHW4VLG3ayKY1rMUzosO",
        "email" : "warbor2@economist.com",
        "name" : "Willabella Arbor",
        "role" : "editor",
        "dob" : "1990-10-25T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "sgricks3",
        "password" : "$2b$08$uiK5dDHLkwFQ72jV7NY2h.Qo4Mu45mR44yDdfPeatOMenUU4dNVTa",
        "email" : "sgricks3@sogou.com",
        "name" : "Siana Gricks",
        "role" : "editor",
        "dob" : "1997-03-09T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "bhalt0",
        "password" : "$2b$08$ZnDGjg8dQcDbvkhFRWc0rert6GwtKi4Fxn9vgv\/zwlDjLPKi8KdG.",
        "email" : "bhalt0@prweb.com",
        "name" : "Ber Halt",
        "role" : "reader",
        "dob" : "1985-11-28T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "brobbey1",
        "password" : "$2b$08$eZzSPISj2JAuuShsAX0Ah.XJOLeZDdngJTWxrYtLq38AnsKE7FiIm",
        "email" : "brobbey1@engadget.com",
        "name" : "Baxie Robbey",
        "role" : "reader",
        "dob" : "2007-08-01T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : "gcogin2",
        "password" : "$2b$08$uMYOHyzPjwU8\/m6bEZbfYuU06RT06FLVCHQhqRaF51CcovCPiqNtO",
        "email" : "gcogin2@mozilla.org",
        "name" : "Gabbie Cogin",
        "role" : "reader",
        "dob" : "1998-01-21T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : "kkennford4",
        "password" : "$2b$08$Kt\/ekIAKFlUxSYSY5Mz\/juLAq7oE56.rL3dTxVE4l2lJSGZLnmFDW",
        "email" : "kkennford4@wikispaces.com",
        "name" : "Ker Kennford",
        "role" : "editor",
        "dob" : "1968-10-06T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "nlomath5",
        "password" : "$2b$08$DkHe3VcbYvvnXYz5jlJYY.6V4MYfctelYJw.txjVJDl4CCnFRmOYC",
        "email" : "nlomath5@bloglines.com",
        "name" : "Nara Lomath",
        "role" : "editor",
        "dob" : "1983-03-20T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "bcawkwell0",
        "password" : "$2b$08$2xGo6RNA2qopRWtrD\/QA\/OXdUZKG0ddd9N9tnEIS70h0JjVGPdqEm",
        "email" : "bcawkwell0@hibu.com",
        "name" : "Bradley Cawkwell",
        "role" : "writer",
        "dob" : "2015-04-30T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "bsivewright1",
        "password" : "$2b$08$LZO0CtNS9nYdab7ZdGsR3ul7aB6ueXEy.\/xf2A7392amKqzIL9BvO",
        "email" : "bsivewright1@usa.gov",
        "name" : "Bart Sivewright",
        "role" : "writer",
        "dob" : "1983-09-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "cluckhurst2",
        "password" : "$2b$08$ohGnzmQ0hvsVaalDHId9fePn46551Ik6mBf6dnvp1FDwnQrA1bwhG",
        "email" : "cluckhurst2@loc.gov",
        "name" : "Clarance Luckhurst",
        "role" : "writer",
        "dob" : "1978-09-07T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "smattes3",
        "password" : "$2b$08$73BHS8nuczmwNF2XRuN2regwCOAI37m\/.nFv1k1zF5ayXrZJtwham",
        "email" : "smattes3@myspace.com",
        "name" : "Sawyer Mattes",
        "role" : "writer",
        "dob" : "1989-01-04T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "thannis4",
        "password" : "$2b$08$RjpCpzre965UnENXYuK9meZq1\/8S.guj0dD\/2CNBdjO30bPxuelae",
        "email" : "thannis4@ehow.com",
        "name" : "Tuesday Hannis",
        "role" : "writer",
        "dob" : "1998-03-20T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "cmacmeeking5",
        "password" : "$2b$08$4vLVLVDshPI3KbgBiK5IFOUCov12R6CJapcGF2D5t6Z3oyLBDs6aW",
        "email" : "cmacmeeking5@geocities.jp",
        "name" : "Carney MacMeeking",
        "role" : "writer",
        "dob" : "1994-04-24T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "emosedale0",
        "password" : "$2b$08$1ES89qJQWV8sXZJQInYwau9.OhwVnWcFnD6dd4mnwhRvqWOd5JwJq",
        "email" : "emosedale0@dion.ne.jp",
        "name" : "Elfreda Mosedale",
        "role" : "admin",
        "dob" : "1980-11-12T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "bhalt0",
        "password" : "$2b$08$6RrTM1ivl05q3iI1HwP8rueusNO1k4VlVgLvCPIoOyuwE1ZcbhJb.",
        "email" : "bhalt0@prweb.com",
        "name" : "Ber Halt",
        "role" : "reader",
        "dob" : "1985-11-28T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "brobbey1",
        "password" : "$2b$08$79xO4KfikqrIhQZId3LlAOrYcy8wfYy2D1EwI3duls8rbfpHpHlG.",
        "email" : "brobbey1@engadget.com",
        "name" : "Baxie Robbey",
        "role" : "reader",
        "dob" : "2007-08-01T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "gcogin2",
        "password" : "$2b$08$JTtZG0JfBskLy5lrjSvubep8ipVFpKhJqxmY\/vQnGoGthtwpwSQ3S",
        "email" : "gcogin2@mozilla.org",
        "name" : "Gabbie Cogin",
        "role" : "reader",
        "dob" : "1998-01-21T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "nestick3",
        "password" : "$2b$08$bwxi9I0.VJZIzXz7WCAyE.omatgsbQwr\/Cbcc2VLT1Rm9NcNEDZAm",
        "email" : "nestick3@omniture.com",
        "name" : "Novelia Estick",
        "role" : "reader",
        "dob" : "1979-08-13T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "kgierek4",
        "password" : "$2b$08$D4YxU8ussfY68QHrvTInCe3BotIo0WFLMhOvAHMpZ\/IZ1yKm6ySbq",
        "email" : "kgierek4@youtube.com",
        "name" : "Kacey Gierek",
        "role" : "reader",
        "dob" : "2013-11-19T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "rmoyser0",
        "password" : "$2b$08$Ba2ze3\/0J8fthZmlGLJspemFgYl4ASwTPIpGQnKVQXLlQ3GHCpfQO",
        "email" : "rmoyser0@squarespace.com",
        "name" : "Raynard Moyser",
        "role" : "editor",
        "dob" : "2012-04-08T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "dlabarre1",
        "password" : "$2b$08$BP4M7YqUQgOFRM.a\/mo6QuaXUyAycQ0gzL5jNT3MQYnIFvA1Krf9S",
        "email" : "dlabarre1@squidoo.com",
        "name" : "Debor Labarre",
        "role" : "editor",
        "dob" : "1967-09-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "warbor2",
        "password" : "$2b$08$YKAgzy37mlTKZr46N3JmZ.LSABPBsg5VHCkV.q48Z0Md7UAczLnEe",
        "email" : "warbor2@economist.com",
        "name" : "Willabella Arbor",
        "role" : "editor",
        "dob" : "1990-10-25T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "sgricks3",
        "password" : "$2b$08$.g4JbLAbvpPXXQKdGAFe\/el.kiZelrzlgZiTpjZyg\/8RVgzCWvfGy",
        "email" : "sgricks3@sogou.com",
        "name" : "Siana Gricks",
        "role" : "editor",
        "dob" : "1997-03-09T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "kkennford4",
        "password" : "$2b$08$CsjC4vA3BbmG44ozbxaNnuOj2V7YEgwcDoYPNbdp3.04aWQfjCvMq",
        "email" : "kkennford4@wikispaces.com",
        "name" : "Ker Kennford",
        "role" : "editor",
        "dob" : "1968-10-06T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "nlomath5",
        "password" : "$2b$08$FQZsrw0GFwpVJd8h\/gkYPe1SWIL07ToDpPMmZVhGJr.9.P5EuwPwS",
        "email" : "nlomath5@bloglines.com",
        "name" : "Nara Lomath",
        "role" : "editor",
        "dob" : "1983-03-20T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "bcawkwell0",
        "password" : "$2b$08$VfkKtnM\/OTxVLDQuRh.q7eAQIhC0WQxAgsUUU1MAYSyFVi1HQ7FMe",
        "email" : "bcawkwell0@hibu.com",
        "name" : "Bradley Cawkwell",
        "role" : "writer",
        "dob" : "2015-04-30T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "bsivewright1",
        "password" : "$2b$08$q4jp5R7Mgm0ap\/Z3kgtBjuv3YTAJowtGAOjM.wd62zkrG4HKJWthC",
        "email" : "bsivewright1@usa.gov",
        "name" : "Bart Sivewright",
        "role" : "writer",
        "dob" : "1983-09-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "cluckhurst2",
        "password" : "$2b$08$TBnTgwiPqDEjwoaPINxahuFLyxJWQm5ANXBiGT41KhwX4hCK8A0ZK",
        "email" : "cluckhurst2@loc.gov",
        "name" : "Clarance Luckhurst",
        "role" : "writer",
        "dob" : "1978-09-07T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "smattes3",
        "password" : "$2b$08$gnoTJ4.1qRCIgM4oztiYN.AsHZMWX4AZYIIajG\/jRxOpSiQygY7jy",
        "email" : "smattes3@myspace.com",
        "name" : "Sawyer Mattes",
        "role" : "writer",
        "dob" : "1989-01-04T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "thannis4",
        "password" : "$2b$08$rDidjU0BCtjSGO8nYP9lWetE2JP.qVSkIcaVX\/kGS7wv\/ojLSCpZC",
        "email" : "thannis4@ehow.com",
        "name" : "Tuesday Hannis",
        "role" : "writer",
        "dob" : "1998-03-20T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "cmacmeeking5",
        "password" : "$2b$08$WiYh85fJqEA2AALyU1yfDuqqMRRgPmRNzCkRxTl3gRzIxEFvCgliG",
        "email" : "cmacmeeking5@geocities.jp",
        "name" : "Carney MacMeeking",
        "role" : "writer",
        "dob" : "1994-04-24T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : "emosedale0",
        "password" : "$2b$08$p\/qHTCwtvMUNYtAtcwGVyuh3ydlFTZFiwLNkVaCtPiMdrkIeQt7ry",
        "email" : "emosedale0@dion.ne.jp",
        "name" : "Elfreda Mosedale",
        "role" : "admin",
        "dob" : "1980-11-12T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : null,
        "password" : "$2b$08$OnJDthIO2PsH4Ikl2FkDfevGAqvv\/9XoWGe4GV8sTavQQ2HXOo3Sa",
        "email" : "chan@gmail.com",
        "name" : "Trang",
        "role" : "reader",
        "dob" : "2023-07-17T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : null,
        "password" : "$2b$08$W09..mwLfCPOncsi0DBCAejJ5d5Z9pdNaP71d\/t9amyLUFFCPUBby",
        "email" : "tester@gmail.com",
        "name" : "tester",
        "role" : "reader",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$m0mlIMKRnJ2deeCc92PRCunAPhX1aoXx3XoaARjOxxY38hs6AMoAW",
        "email" : "hello@gmail.com",
        "name" : "hello",
        "role" : "editor",
        "dob" : "2023-07-25T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : null,
        "password" : "$2b$08$euyBolfheZsR6OVpoT3Vh.oGmhhmHGiZ6JvAyX3zrJgcvKBVrtELi",
        "email" : "cudem123@gmail.com",
        "name" : "cudem",
        "role" : "editor",
        "dob" : "2023-07-19T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png\r\n"
      },
      {
        "username" : null,
        "password" : "$2b$08$e9CqLl1fAWIKcPUacxXqk.8\/EzOHRlNUdd3SknVYoOj.burg1IlpO",
        "email" : "thaovo29620022@gmail.com",
        "name" : "ttest3",
        "role" : "editor",
        "dob" : "2023-07-08T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$iWBKR8OuOVZZyTyY5iI5I.GwYXtoxKUJHfMiSXIaWIeELBQORNYeK",
        "email" : "thtrangphu@gmail.com",
        "name" : "Trang Th",
        "role" : "reader",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "https:\/\/lh3.googleusercontent.com\/a\/AAcHTtd27J5ekebd1NRHVYHEAP6xX68sQCVoWTrD8tUT0IhVmw=s96-c"
      },
      {
        "username" : null,
        "password" : "$2b$08$Qv3mAs4id38cGAS4uStttOStcsqWUbtEN1qjsRG0qDhZAxkL02.0K",
        "email" : "trnhquchuy@gmail.com",
        "name" : "rivf",
        "role" : "reader",
        "dob" : "2002-11-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$Uh4acoXRZHf\/twfb0N4MVOtoZOKKU3SXnqBxTAvXJN4xLFYLSfeAS",
        "email" : "thaovo2962002@gmail.com",
        "name" : "ttest",
        "role" : "admin",
        "dob" : "2023-07-15T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$.\/zif\/qHvN9KozQn2eMrZu8P8FRkGobxuKVd\/8NXFcs0capSFI6ey",
        "email" : "trnhquchuy@yahoo.com.vn",
        "name" : "ttest2",
        "role" : "writer",
        "dob" : "2023-07-07T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$FuHX30X7VsljqMlDEN4su.w8UNgDtYclBJFsfAStpmrmKeB9NEDOi",
        "email" : "chanlanthan123@gmail.com",
        "name" : "chanlanthan",
        "role" : "writer",
        "dob" : "2002-02-22T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$xO2OhwUQX2qRYHP3Go2gUu5qixd9dpmSnUEA0EBTHhyT5ZbMNT.mm",
        "email" : "hello123@gmail.com",
        "name" : "hello",
        "role" : "reader",
        "dob" : "2002-01-01T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$IokyMsGF3rLBwEQN.xabfOVgxTkJSRge8pdXZBYZTmXuXv.1J9OdW",
        "email" : "admin@gmail.com",
        "name" : "Admin",
        "role" : "admin",
        "dob" : "2002-02-02T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$gYhJB0Pmx\/fuHL3nqHVNhewdE7.bX3B8W1Rrt\/Dd78tnRQipYRbsy",
        "email" : "morning@gmail.com",
        "name" : "Good Morning",
        "role" : "reader",
        "dob" : "1999-02-07T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$LQsJH0hK7kV5kAxISJWvxeos0rKmpT97sNZ9BRU\/4VNmJGtSoQ25W",
        "email" : "table@gmail.com",
        "name" : "Table",
        "role" : "reader",
        "dob" : "2001-01-01T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$\/x.vLlE1ZRPrj6xHQ7zhwulA0WxnzvscXGMlddo6Za8rSxCN4UIEK",
        "email" : "ttest4@gmail.com",
        "name" : "ttest4",
        "role" : "reader",
        "dob" : "2023-07-12T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$JbvmuJwSDYzreYlX975MqO9pPVxLmub9hDiAN0L2vSWwh2vX21z\/W",
        "email" : "reader@gmail.com",
        "name" : "Reader",
        "role" : "reader",
        "dob" : "2023-01-03T00:00:00.000Z",
        "avatar" : "\/uploads\/image-1689014492385-628365479.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$br\/lrZGWLVyJlTfR7rVqQOy1bMldKGlrzTWAOfuivnzzMJdR9tu26",
        "email" : "editor@gmail.com",
        "name" : "Editor",
        "role" : "editor",
        "dob" : "2002-01-11T00:00:00.000Z",
        "avatar" : "\/uploads\/image-1689015032601-928068061.png"
      },
      {
        "username" : "Laptopcute",
        "password" : "$2b$08$gV9ZT5M2eupw9L1vHBBXtuO58SwslEkHa592sGEOQ\/v5yUTgA8ZdO",
        "email" : "laptop123@gmail.com",
        "name" : "laptop123",
        "role" : "writer",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/uploads\/image-1689013096716-174544948.png"
      },
      {
        "username" : "",
        "password" : "$2b$08$S.l7Ut3.amnIw9l065LAZ.kX2rXi748\/2jeIqBvtVDv8Dy0Exc\/Qu",
        "email" : "writer@gmail.com",
        "name" : "Writer",
        "role" : "writer",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/uploads\/image-1689018193858-875766219.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$1brPMy441lWkjF\/apkp1NOwDrN3EzeWrRVAN9CPcBCLs4mmtfFK82",
        "email" : "t@gmail.com",
        "name" : "T",
        "role" : "reader",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : "$2b$08$2GeC9hgk\/kx6tTc9gCgsTu4bMuEsMJEe6dHI4QlFsV6lJrFY0tF1S",
        "email" : "signup@gmail.com",
        "name" : "signup",
        "role" : "reader",
        "dob" : "2023-07-11T00:00:00.000Z",
        "avatar" : "\/img\/avatar\/avt.png"
      },
      {
        "username" : null,
        "password" : null,
        "email" : "aeyesgroup@gmail.com",
        "name" : "Group Aeyes",
        "role" : "reader",
        "dob" : null,
        "avatar" : "https:\/\/lh3.googleusercontent.com\/a\/AAcHTtdsH73K0zyH7dzMEK-edJGbQcpCp2hU9pF8_XG8YBru=s96-c"
      }
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Users', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
