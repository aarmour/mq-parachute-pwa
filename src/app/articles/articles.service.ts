import 'rxjs/add/observable/from';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticlesService {

  private articles = [
    {
      "slug": "58602d561e728bafc31121fe",
      "topic": "featured",
      "title": "officia est aute sint Lorem pariatur exercitation ipsum elit aute",
      "author": "Flores Espinoza",
      "short_description": "Ipsum ullamco ad commodo culpa cillum deserunt exercitation ex dolore reprehenderit dolore minim. Consequat cillum consequat cillum nostrud minim reprehenderit tempor consectetur occaecat consectetur amet. Reprehenderit ipsum incididunt deserunt Lorem cillum cillum cillum elit aliqua.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-06-01T11:58:20.008Z"
    },
    {
      "slug": "58602d568cf76d8224bfdfd2",
      "topic": "featured",
      "title": "velit fugiat est laborum elit aliqua esse do nulla ullamco",
      "author": "Lorraine Puckett",
      "short_description": "Elit aliquip do voluptate pariatur esse non velit. Tempor magna exercitation sint voluptate laborum quis velit. Ea dolore id fugiat eiusmod cupidatat.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-08-13T14:55:26.244Z"
    },
    {
      "slug": "58602d5641d84813d1299683",
      "topic": "featured",
      "title": "et do aute mollit velit exercitation Lorem qui consectetur eiusmod",
      "author": "Patton Pennington",
      "short_description": "Voluptate dolor laboris eu voluptate labore laboris dolor aute commodo do ut anim pariatur aliquip. Do reprehenderit culpa esse irure. Magna cupidatat culpa enim ullamco Lorem voluptate adipisicing eu deserunt eiusmod irure.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-11-01T07:25:00.215Z"
    },
    {
      "slug": "58602d56c466f5f419334838",
      "topic": "featured",
      "title": "voluptate do magna cillum ut laboris voluptate ipsum ut magna",
      "author": "Bright Christensen",
      "short_description": "Commodo ullamco excepteur incididunt ex dolor mollit excepteur commodo duis tempor enim nisi in in. Velit dolor ea quis sint cillum ut dolor. Nulla do ex consectetur elit eu proident minim et incididunt ullamco ad in pariatur.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-12-08T20:58:33.546Z"
    },
    {
      "slug": "58602d56849c2f467d9ac256",
      "topic": "featured",
      "title": "fugiat nisi sint irure nisi velit ad ea sunt aliquip",
      "author": "Dejesus Roach",
      "short_description": "Velit laboris occaecat Lorem ea ut minim occaecat non velit exercitation officia proident in. Id esse duis ut anim qui ullamco cupidatat sint ea amet et magna do. Tempor tempor laborum reprehenderit adipisicing velit proident dolore anim officia laboris non consectetur nostrud.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-11-23T17:53:10.867Z"
    },
    {
      "slug": "58602d56e858c3f03ffe6927",
      "topic": "featured",
      "title": "officia ea sunt qui qui enim officia sint nulla ea",
      "author": "Clark Steele",
      "short_description": "Do ea pariatur Lorem minim labore. Consequat est exercitation duis et exercitation eu incididunt adipisicing eiusmod incididunt irure tempor reprehenderit occaecat. Aliqua cupidatat anim dolore reprehenderit duis do.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-06-06T08:19:38.389Z"
    },
    {
      "slug": "58602d56234279b76b4669a0",
      "topic": "featured",
      "title": "velit adipisicing deserunt id velit minim ad labore aute irure",
      "author": "Reeves Chavez",
      "short_description": "Minim velit aliqua esse exercitation. Laborum ea quis Lorem officia officia sint quis mollit et sunt in reprehenderit est. Incididunt elit do cupidatat id dolor Lorem id irure aliqua mollit velit duis.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2017-01-17T14:31:23.191Z"
    },
    {
      "slug": "58602d563338e3ccdca3406e",
      "topic": "featured",
      "title": "nulla duis anim mollit cillum esse ullamco eu ut sit",
      "author": "Peterson Hicks",
      "short_description": "Mollit qui sunt nisi tempor officia deserunt ea ad labore nostrud eiusmod anim. Sit exercitation tempor sint incididunt proident adipisicing in quis aliqua ea quis laboris. Velit cillum consequat ea duis.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-06-22T04:25:11.250Z"
    },
    {
      "slug": "58602d5622dd7ac742f74c84",
      "topic": "featured",
      "title": "reprehenderit irure culpa quis ad dolor labore adipisicing eiusmod deserunt",
      "author": "Mullen Shaw",
      "short_description": "Anim ut adipisicing quis ullamco excepteur non tempor exercitation eiusmod. Fugiat irure esse culpa aliqua. Sunt ullamco anim proident id.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2017-01-18T22:44:21.066Z"
    },
    {
      "slug": "58602d567ab45d0f8f25aea2",
      "topic": "featured",
      "title": "tempor nulla labore adipisicing ad officia in occaecat aliqua do",
      "author": "Sara Cain",
      "short_description": "Nulla qui cillum labore eiusmod amet qui consectetur amet ex cillum laboris aute qui. Dolore laboris minim ea labore ea pariatur fugiat laborum eu eu amet. Cillum ad laboris id culpa magna sunt voluptate cupidatat veniam est.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-10-05T21:49:04.329Z"
    },
    {
      "slug": "58602d56168c317442b366ea",
      "topic": "local",
      "title": "ad incididunt culpa qui sit cupidatat est cupidatat dolor Lorem",
      "author": "Maxwell Hines",
      "short_description": "Ullamco labore consequat consequat incididunt labore aute sunt commodo in dolore deserunt. In excepteur pariatur et aliqua occaecat consequat dolore. Magna tempor eu elit quis aliquip nostrud magna consectetur aliquip esse duis.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-06-23T01:00:18.566Z"
    },
    {
      "slug": "58602d561bde20c6d266e6d0",
      "topic": "local",
      "title": "aliqua consectetur commodo ex veniam deserunt laborum aliqua labore laborum",
      "author": "Delacruz Bentley",
      "short_description": "Ipsum aliqua enim sit incididunt enim non cillum laborum ad. Eu pariatur cillum laborum anim exercitation non ullamco veniam in ullamco culpa est cillum. Sit nostrud commodo esse nisi dolore nostrud est aute est sint anim occaecat.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2017-01-12T23:47:10.070Z"
    },
    {
      "slug": "58602d567e2d669e375464ab",
      "topic": "local",
      "title": "aliquip sint veniam amet voluptate ipsum amet cillum irure consequat",
      "author": "Bettye Perez",
      "short_description": "Quis sint et ea commodo irure laboris deserunt exercitation ut culpa enim. Commodo incididunt velit sunt tempor velit eiusmod incididunt incididunt ullamco officia aliquip nostrud minim eiusmod. Lorem reprehenderit cupidatat excepteur eu.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-08-27T09:42:10.721Z"
    },
    {
      "slug": "58602d56664c2944d4eb9032",
      "topic": "local",
      "title": "sint esse eu fugiat exercitation adipisicing sit eu dolore ipsum",
      "author": "Payne Glenn",
      "short_description": "Laboris labore elit nulla irure excepteur nulla aute do est aliqua aliqua ex culpa. Aliqua adipisicing nostrud sunt nostrud nulla. Aute laborum do qui sint.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-08-07T22:26:46.425Z"
    },
    {
      "slug": "58602d56c87a3b83d8f8e2bb",
      "topic": "local",
      "title": "exercitation reprehenderit ipsum qui ipsum exercitation nostrud Lorem irure incididunt",
      "author": "Bonner Joyce",
      "short_description": "Culpa eu est ut labore duis eiusmod aliqua laborum et culpa magna labore exercitation sit. Exercitation in enim reprehenderit ad enim ut consectetur Lorem cillum qui labore voluptate. Deserunt quis labore pariatur proident eu pariatur ad in adipisicing officia aute veniam culpa.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-11-15T12:55:47.042Z"
    },
    {
      "slug": "58602d5611cf48c879776a27",
      "topic": "local",
      "title": "occaecat consectetur aute mollit aliqua cupidatat amet duis sint ad",
      "author": "Doris Pearson",
      "short_description": "Qui ipsum qui sunt dolore dolore Lorem ex exercitation. Ipsum laborum occaecat sit commodo et labore. Fugiat mollit mollit excepteur ut officia cupidatat.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-12-04T01:42:58.605Z"
    },
    {
      "slug": "58602d56b96b0ca362f699c3",
      "topic": "local",
      "title": "cillum ea ullamco ut deserunt nostrud magna tempor consectetur pariatur",
      "author": "Wooten Obrien",
      "short_description": "Cillum proident nulla et magna do aute cupidatat ad excepteur tempor duis qui ex. Occaecat commodo amet ullamco elit Lorem anim fugiat sunt consectetur non duis ut nostrud. Occaecat nulla esse proident et velit ullamco enim culpa nostrud.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-09-30T23:41:00.215Z"
    },
    {
      "slug": "58602d56b0e2f9bb8cdfdee7",
      "topic": "local",
      "title": "irure quis dolore sint id commodo aliquip fugiat nostrud aliqua",
      "author": "Tara Bryan",
      "short_description": "Tempor sit duis exercitation aliqua exercitation ullamco excepteur reprehenderit minim anim. Lorem cupidatat commodo et laboris enim nulla mollit dolor nisi exercitation. Cillum fugiat culpa do amet sit exercitation quis dolor ullamco culpa elit magna mollit.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-09-23T23:48:23.043Z"
    },
    {
      "slug": "58602d56840ae28740d9e92b",
      "topic": "local",
      "title": "Lorem exercitation do duis quis voluptate amet ad ad ut",
      "author": "Janis Potts",
      "short_description": "Deserunt pariatur aute minim consectetur id adipisicing ex irure amet commodo Lorem cillum elit. Reprehenderit nisi aute nisi incididunt incididunt sit sunt consequat aute commodo. Labore cillum est laboris laborum labore irure commodo ex elit.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-05-23T22:35:01.689Z"
    },
    {
      "slug": "58602d561ff30d36aa36e78b",
      "topic": "local",
      "title": "dolore mollit mollit nulla nulla fugiat dolor laborum reprehenderit et",
      "author": "Grant Tate",
      "short_description": "Occaecat officia ipsum exercitation id quis occaecat officia ex et magna voluptate reprehenderit. Eu pariatur qui consectetur consequat adipisicing duis commodo qui tempor eu. Et ea sit minim dolor incididunt sunt pariatur.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-03-24T09:31:27.971Z"
    },
    {
      "slug": "58602d5612e463e08d755f8b",
      "topic": "travel",
      "title": "occaecat pariatur Lorem minim nostrud minim in mollit incididunt do",
      "author": "Holt Burke",
      "short_description": "Eiusmod eu aute laborum veniam qui fugiat sit cupidatat in aliqua labore excepteur ut. Consequat qui officia dolor consectetur anim id elit aliquip velit excepteur. Ipsum ea pariatur consectetur minim est adipisicing amet tempor commodo.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-11-14T13:21:07.284Z"
    },
    {
      "slug": "58602d56b87090676d708472",
      "topic": "travel",
      "title": "elit nostrud voluptate dolore excepteur irure cupidatat exercitation anim ad",
      "author": "Eunice William",
      "short_description": "Aliqua eu nostrud incididunt aute exercitation excepteur laboris ut ad dolor aliqua dolor proident. Laboris aliquip aliquip est irure cillum id occaecat. Adipisicing ea minim in laboris cillum.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-07-28T18:38:49.844Z"
    },
    {
      "slug": "58602d56f825862a5d764cd6",
      "topic": "travel",
      "title": "sint cupidatat aliquip voluptate nostrud incididunt anim in quis eiusmod",
      "author": "Webb Talley",
      "short_description": "Minim nulla cupidatat deserunt proident esse laboris anim irure ut adipisicing adipisicing. Velit eiusmod eiusmod laboris dolore nulla. Aliquip consequat minim mollit tempor amet.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-08-10T21:01:35.278Z"
    },
    {
      "slug": "58602d56c616c54d8792d455",
      "topic": "travel",
      "title": "duis aliqua adipisicing qui proident amet non et veniam aliqua",
      "author": "Daniel Hardin",
      "short_description": "Eiusmod cupidatat sint do id ullamco cillum eu. Cupidatat commodo commodo et commodo cupidatat ad eiusmod est. Nisi aliquip excepteur dolor dolor.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-11-17T15:23:19.933Z"
    },
    {
      "slug": "58602d5635f52203747c2784",
      "topic": "travel",
      "title": "officia commodo ut quis nulla eiusmod laboris consectetur cupidatat nostrud",
      "author": "Bean Ballard",
      "short_description": "Irure nulla voluptate sint nostrud non dolor consectetur adipisicing et id ipsum ipsum elit exercitation. Enim cupidatat cupidatat dolore laboris aute ea Lorem id cillum mollit. Nostrud dolor commodo exercitation non do.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-09-11T19:28:12.062Z"
    },
    {
      "slug": "58602d569fa6dbbe3f1580c5",
      "topic": "travel",
      "title": "ea exercitation reprehenderit consequat nisi deserunt pariatur irure consequat tempor",
      "author": "Randi Ford",
      "short_description": "Eiusmod nulla occaecat ullamco eu ut quis labore quis ad incididunt laborum. Do officia adipisicing in consectetur ad consequat. Nostrud eiusmod non laborum officia nulla nostrud elit est cillum veniam.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-09-21T22:43:11.472Z"
    },
    {
      "slug": "58602d564db921daa7f6c177",
      "topic": "travel",
      "title": "et sint aliquip mollit esse elit veniam culpa irure dolor",
      "author": "Welch Stewart",
      "short_description": "Voluptate mollit amet nulla nulla ut nisi reprehenderit in id mollit velit dolor. Dolore mollit ipsum ea nostrud. Mollit veniam ut non est aute cillum enim cillum ad amet occaecat.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-05-10T13:29:25.420Z"
    },
    {
      "slug": "58602d56729801556290f5a1",
      "topic": "travel",
      "title": "nostrud ullamco laborum exercitation enim adipisicing minim consectetur non quis",
      "author": "Johnston Hendrix",
      "short_description": "Velit consectetur et occaecat aliquip culpa occaecat ad nisi consequat non qui id. Officia officia Lorem magna incididunt nisi aliquip nostrud consectetur ut. Dolor enim eu ex dolore id amet et esse nostrud sunt et aliquip.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-09-27T10:10:59.933Z"
    },
    {
      "slug": "58602d561bd6e76340ccbcdf",
      "topic": "travel",
      "title": "dolore enim ipsum nisi excepteur Lorem eu aliquip sint ut",
      "author": "Mari Valenzuela",
      "short_description": "In ex proident occaecat veniam. Voluptate sint laboris ullamco nostrud esse ea id cillum non adipisicing. Ad qui duis et commodo dolor qui sit sunt aliqua exercitation anim.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-02-14T06:05:06.445Z"
    },
    {
      "slug": "58602d56569a130f35a7714a",
      "topic": "travel",
      "title": "est esse aute sunt cupidatat occaecat velit ad sunt nisi",
      "author": "Strickland Rosario",
      "short_description": "Aliqua commodo cupidatat et aliqua sit ut incididunt consectetur ut cillum in sunt. Deserunt aliqua nostrud laborum eu in cillum voluptate. Ipsum nisi Lorem sunt duis ad aliqua id quis culpa.",
      "thumbnail_url": "https://placehold.it/160x100",
      "published_date": "2016-08-11T12:20:33.614Z"
    }
  ];

  constructor() { }

  fetch(id) {

  }

  list(topic) {
    return Observable.from([this.articles.filter(article => article.topic === topic)]);
  }

}
