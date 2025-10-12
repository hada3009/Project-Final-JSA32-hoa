let name_gm =  '{"name":[' +
            '"*001. Magnus Carlsen",' +
            '"*002. Hikaru Nakamura",' +
            '"*003. Arjun Erigaisi",' +
            '"*004. Bobby Fischer",' +
            '"*005. Mikhail Tal",' +
            '"*006. Boris Spassky"]}';
let name_special =  '{"special":[' +
            '"best chess player of the world in present",' +
            '"*the speed demon* of chess",' +
            '"*madman*",' +
            '"creator of chess960",' +
            '"*The magician from Riga*",' +
            '"Bobby Fischer greatest enemy"]}';
let info_gm_1 =  '{"info":[' +
            '"Sven Magnus Øen Carlsen (born 30 November 1990) is a Norwegian chess grandmaster. Carlsen is a five-time World Chess Champion, five-time World Rapid Chess Champion, and the reigning eight-time World Blitz Chess Champion. He has held the No.1 position in the FIDE world chess rankings since 1 July 2011 and trails only Garry Kasparov in time spent as the highest-rated player in the world. His peak rating of 2882 is the highest in history. He also holds the record for the longest unbeaten streak at the elite level in classical chess at 125 games.",' +
            '"Christopher Hikaru Nakamura (born December 9, 1987) is an American chess grandmaster, streamer, YouTuber, five-time U.S. Chess Champion, and the reigning World Fischer Random Chess Champion. A chess prodigy, he earned his grandmaster title at the age of 15, the youngest American at the time to do so. With a peak rating of 2816, Nakamura is the tenth-highest-rated player in history.",' +
            '"Arjun Kumar Erigaisi (born 3 September 2003) is an Indian chess grandmaster. A chess prodigy, he earned the title of grandmaster at the age of 14 years, 11 months, 13 days. In September 2024 he became India top rated player, and in December 2024 he achieved his peak rating of 2801 which makes him the fifteenth-highest rated player in history and second Indian ever to cross the 2800 threshold after Viswanathan Anand. He has sometimes been described as a madman over the board for his bold and unpredictable style.",' +
            '"Robert James Fischer (March 9, 1943 - January 17, 2008) was an American chess grandmaster and the eleventh World Chess Champion. A chess prodigy, he won his first of a record eight US Championships at the age of 14. In 1964, he won with an 11-0 score, the only perfect score in the history of the tournament. Qualifying for the 1972 World Championship, Fischer swept matches with Mark Taimanov and Bent Larsen by 6-0 scores. After winning another qualifying match against Tigran Petrosian, Fischer won the title match against Boris Spassky of the USSR, in Reykjavík, Iceland. Publicized as a Cold War confrontation between the US and USSR, the match attracted more worldwide interest than any chess championship before or since.",' +
            '"Mikhail Tal (9 November 1936 - 28 June 1992) was a Soviet and Latvian chess player and the eighth World Chess Champion. He is considered a creative genius and is widely regarded as one of the most influential players in chess history. Tal played in an attacking and daring combinatorial style. His play was known above all for improvisation and unpredictability. Vladislav Zubok said of him, *Every game for him was as inimitable and invaluable as a poem*",' +
            '"Boris Vasilyevich Spassky (Russian: Борис Васильевич Спасский; January 30, 1937 - February 27, 2025) was a Russian chess grandmaster who was the tenth World Chess Champion, holding the title from 1969 to 1972. Spassky played three world championship matches: he lost to Tigran Petrosian in 1966; defeated Petrosian in 1969 to become world champion; then lost to Bobby Fischer in a famous match in 1972."]}';
let info_gm_2 =  '{"info":[' +
            '"A chess prodigy, Carlsen finished first in the C group of the Corus chess tournament shortly after he turned 13 and earned the title of grandmaster a few months later. At 15, he won the Norwegian Chess Championship, and later became the youngest ever player to qualify for the Candidates Tournament in 2005. At 17, he finished joint first in the top group of Corus. He surpassed a rating of 2800 at 18, the youngest at the time to do so. In 2010, at 19, he reached No.1 in the FIDE world rankings, the youngest person ever to do so.",' +
            '"Nakamura has represented the United States at seven Chess Olympiads (2006, 2008, 2010, 2012, 2014, 2016, 2018), securing a team gold medal and two team bronze medals, and participated in three Candidates Tournaments, finishing second in 2024 edition, fourth in 2022 edition, and seventh in the 2016 edition. In May 2014, when FIDE began publishing official rapid and blitz chess ratings, Nakamura ranked No. 1 in the world on both Lists; he has remained at or near the No. 1 rank in rapid and blitz ever since.",' +
            '"",' +
            '"In 1975, Fischer refused to defend his title when an agreement could not be reached with FIDE, international governing body of chess, over the match conditions. Consequently, the Soviet challenger Anatoly Karpov was named World Champion by default. Fischer subsequently disappeared from the public eye, though occasional reports of erratic behavior emerged. In 1992, he reemerged to win an unofficial rematch against Spassky. It was held in Yugoslavia, which at the time was under an embargo of the United Nations. His participation led to a conflict with the US federal government, which warned Fischer that his participation in the match would violate an executive order imposing US sanctions on Yugoslavia. The US government ultimately issued a warrant for his arrest; subsequently, Fischer lived as an émigré. In 2004, he was arrested in Japan and held for several months for using a passport that the US government had revoked. Eventually, he was granted Icelandic citizenship by a special act of the Althing, allowing him to live there until his death in 2008.",' +
            '"His nickname was *Misha*, a diminutive for Mikhail, and he earned the nickname *The Magician from Riga*. Both The Mammoth Book of the Greatest Chess Games of the world and Modern Chess Brilliancies include more games by Tal than any other player. He also held the record for the longest unbeaten streak in competitive chess history with 95 games (46 wins, 49 draws) between 23 October 1973 and 16 October 1974, until the streak of Ding Liren of 100 games (29 wins, 71 draws) between 9 August 2017 and 11 November 2018. In addition, Tal was a highly regarded chess writer.",' +
            '"Spassky won the Soviet Chess Championship twice outright (1961, 1973), and twice lost in playoffs (1956, 1963), after tying for first place during the event proper. He was a World Chess Championship candidate on seven occasions (1956, 1965, 1968, 1974, 1977, 1980, 1985). In addition to his Candidates wins in 1965 and 1968, Spassky reached the semi-final stage in 1974 and the final stage in 1977."]}';
let info_gm_3 =  '{"info":[' +
            '"Carlsen became World Chess Champion in 2013 by defeating Viswanathan Anand. He retained his title against Anand the following year and won both the 2014 World Rapid Championship and World Blitz Championship, becoming the first player to hold all three titles simultaneously, a feat which he repeated in 2019 and 2022. He defended his classical world title against Sergey Karjakin in 2016, Fabiano Caruana in 2018, and Ian Nepomniachtchi in 2021. Carlsen declined to defend his title in 2023, citing a lack of motivation.",' +
            '"Since 2018, Nakamura has pursued a career as a content creator and subsequently signed with an esports organization TSM, later joining Misfits Gaming and then Team Falcons. Having popular channels on Twitch, Kick and YouTube, Nakamura is the most popular chess streamer and has been credited with contributing to the growth in popularity of online chess.",' +
            '"",' +
            '"Fischer made many lasting contributions to chess. His book My 60 Memorable Games, published in 1969, is regarded as essential reading in chess literature. In the 1990s, he patented a modified chess timing system that added a time increment after each move, now a standard practice in top tournament and match play. He also invented Fischer random chess, also known as Chess960, a chess variant in which the initial position of the pieces is randomized to one of 960 possible positions.",' +
            '"Tal died on 28 June 1992 in Moscow, Russia. The Mikhail Tal Memorial chess tournament has been held in Moscow annually since 2006.",' +
            '"Spassky immigrated to France in 1976 and became a French citizen in 1978. He continued to compete in tournaments, but was no longer a major contender for the world title. Spassky lost an unofficial rematch against Fischer in 1992. In 2012, he left France and returned to Russia."]}';
let info_gm_4 =  '{"info":[' +
            '"Known for his attacking style as a teenager, Carlsen has since developed into a universal player. He uses a variety of openings to make it harder for opponents to prepare against him and reduce the utility of pre-game computer analysis. In 2025, he signed with esports organization Team Liquid.",' +
            '"",' +
            '"",' +
            '"Fischer made numerous antisemitic statements, including Holocaust denial, despite his Jewish ancestry. His antisemitism was a major theme in his public and private remarks, and there has been speculation concerning his psychological condition based on his extreme views and eccentric behavior.",' +
            '"",' +
            '""]}';
let img_gm =  '{"img":[' +
            '"/assets/other/image/mc_flip.png",' +
            '"/assets/other/image/hn_2.jpg",' +
            '"/assets/other/image/arjun.jpg",' +
            '"/assets/other/image/bf.jpg",' +
            '"/assets/other/image/mi.jpg",' +
            '"/assets/other/image/bs.jpg"]}';
const gm_name = JSON.parse(name_gm)
const gm_special = JSON.parse(name_special)
const gm_1 = JSON.parse(info_gm_1)
const gm_2 = JSON.parse(info_gm_2)
const gm_3 = JSON.parse(info_gm_3)
const gm_4 = JSON.parse(info_gm_4)
const gm_img = JSON.parse(img_gm)

function gm_info_selector(){
    let info_state = "info" + "=";
    let List_info = document.cookie.split(';');
    for(let i = 0; i < List_info.length; i++) {
        let info_spa = List_info[i];
        while (info_spa.charAt(0) == ' ') {
            info_spa = info_spa.substring(1);
        }
        if (info_spa.indexOf(info_state) == 0) {
            if (info_spa.substring(info_state.length, info_spa.length)==1){
                gm_info_writer(1)
            }
            if (info_spa.substring(info_state.length, info_spa.length)==2){
                gm_info_writer(2)
            }
            if (info_spa.substring(info_state.length, info_spa.length)==3){
                gm_info_writer(3)
            }
            if (info_spa.substring(info_state.length, info_spa.length)==4){
                gm_info_writer(4)
            }
            if (info_spa.substring(info_state.length, info_spa.length)==5){
                gm_info_writer(5)
            }
            if (info_spa.substring(info_state.length, info_spa.length)==6){
                gm_info_writer(6)
            }
            
        }
    }
    return "";
}

function gm_info_writer(number){
    document.getElementById("gfh").innerHTML=gm_name.name[number-1]
    document.getElementById("special").innerHTML=gm_special.special[number-1]
    document.getElementById("gm_1").innerHTML=gm_1.info[number-1]
    document.getElementById("gm_2").innerHTML=gm_2.info[number-1]
    document.getElementById("gm_3").innerHTML=gm_3.info[number-1]
    document.getElementById("gm_4").innerHTML=gm_4.info[number-1]
    document.getElementById("hhh").src=gm_img.img[number-1]
}
